import mysql.connector
from config import MYSQL_CONFIG

def get_db_connection(use_database=True):
    try:
        config = MYSQL_CONFIG.copy()
        if not use_database:
            config.pop('database', None)
        conn = mysql.connector.connect(**config)
        return conn
    except mysql.connector.Error as err:
        print(f"Error connecting to MySQL: {err}")
        return None

def init_db():
    conn = get_db_connection(use_database=False)
    if not conn:
        return
    
    cursor = conn.cursor()
    cursor.execute(f"CREATE DATABASE IF NOT EXISTS {MYSQL_CONFIG['database']}")
    conn.commit()
    cursor.close()
    conn.close()

    conn = get_db_connection()
    if not conn:
        return
    
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS transactions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            type ENUM('income', 'expense') NOT NULL,
            amount DECIMAL(15, 2) NOT NULL,
            category VARCHAR(100) NOT NULL,
            date DATE NOT NULL,
            description TEXT
        )
    ''')
    conn.commit()
    cursor.close()
    conn.close()

def add_transaction(t_type, amount, category, date, description):
    conn = get_db_connection()
    if not conn:
        return
    
    cursor = conn.cursor()
    query = '''
        INSERT INTO transactions (type, amount, category, date, description)
        VALUES (%s, %s, %s, %s, %s)
    '''
    cursor.execute(query, (t_type, amount, category, date, description))
    conn.commit()
    cursor.close()
    conn.close()

def get_all_transactions():
    conn = get_db_connection()
    if not conn:
        return []
    
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM transactions ORDER BY date DESC')
    transactions = cursor.fetchall()
    
    for t in transactions:
        t['amount'] = float(t['amount'])
        t['date'] = str(t['date'])

    cursor.close()
    conn.close()
    return transactions

def delete_transaction(t_id):
    conn = get_db_connection()
    if not conn:
        return
    
    cursor = conn.cursor()
    cursor.execute('DELETE FROM transactions WHERE id = %s', (t_id,))
    conn.commit()
    cursor.close()
    conn.close()

def get_summary():
    conn = get_db_connection()
    if not conn:
        return {'total_income': 0.0, 'total_expense': 0.0, 'balance': 0.0}
    
    cursor = conn.cursor()
    
    cursor.execute("SELECT SUM(amount) FROM transactions WHERE type = 'income'")
    income = float(cursor.fetchone()[0] or 0.0)
    
    cursor.execute("SELECT SUM(amount) FROM transactions WHERE type = 'expense'")
    expense = float(cursor.fetchone()[0] or 0.0)
    
    cursor.close()
    conn.close()
    return {
        'total_income': income,
        'total_expense': expense,
        'balance': income - expense
    }

if __name__ == '__main__':
    init_db()
    print("Database connection and table verified.")
