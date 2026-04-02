# 📁 `database.py`: Literal Every-Line Breakdown 📔

This document provides a **complete, no-omission** explanation for every single line of `database.py`.

| Line # | **Code** | **Explanation** |
| :--- | :--- | :--- |
| **1** | `import mysql.connector` | Imports the MySQL driver library used to communicate with the database server. |
| **2** | `from config import MYSQL_CONFIG` | Imports your specific hardware/login settings from the `config.py` file. |
| **3** | ` ` | Blank line for visual spacing between imports and code logic. |
| **4** | `def get_db_connection(use_database=True):` | Defines a function to create a new connection to MySQL. `use_database=True` is a default setting. |
| **5** | `    try:` | Starts an error-handling block. If the connection fails, the code inside the `except` block will run. |
| **6** | `        config = MYSQL_CONFIG.copy()` | Creates a temporary copy of your settings so we don't accidentally change the originals. |
| **7** | `        if not use_database:` | A conditional check. If `use_database` is False, run the next line. |
| **8** | `            config.pop('database', None)` | Removes the 'database' name from the settings. Used during the very first setup. |
| **9** | `        conn = mysql.connector.connect(**config)` | The actual command that "Dials" the MySQL server using your username and password. |
| **10** | `        return conn` | Sends the active connection back to whoever called the function. |
| **11** | `    except mysql.connector.Error as err:` | If Line 9 failed (wrong password, etc.), this line catches the error. |
| **12** | `        print(f"Error connecting to MySQL: {err}")` | Prints a helpful error message to your terminal so you can see why it failed. |
| **13** | `        return None` | Returns "nothing" to show the connection was unsuccessful. |
| **14** | ` ` | Blank line for readability. |
| **15** | `def init_db():` | Defines a function to set up the database and tables for the very first time. |
| **16** | `    # 1. Connect without database ...` | A comment explaining that we first connect just to the server to create the DB. |
| **17** | `    conn = get_db_connection(use_database=False)` | Calls our connection function without a database name. |
| **18** | `    if not conn:` | Checks if the connection failed. |
| **19** | `        return` | If failed, stop the function immediately. |
| **20** | ` ` | Blank line. |
| **21** | `    cursor = conn.cursor()` | Creates a "Cursor"—the object that actually "types" the SQL commands into the server. |
| **22** | `    cursor.execute(f"CREATE DATABASE ...")` | Executes the SQL command to create the `finance_db` if it doesn't exist yet. |
| **23** | `    conn.commit()` | Saves the "Create Database" command permanently. |
| **24** | `    cursor.close()` | Safely closes the "typing" tool (cursor). |
| **25** | `    conn.close()` | Safely disconnects from the MySQL server. |
| **26** | ` ` | Blank line. |
| **27** | `    # 2. Reconnect and create ...` | Comment explaining the next step: creating the specific table. |
| **28** | `    conn = get_db_connection()` | Reconnects, this time specifying the `finance_db` database. |
| **29** | `    if not conn:` | Checks if the connection failed. |
| **30** | `        return` | If failed, stop the function. |
| **31** | ` ` | Blank line. |
| **32** | `    cursor = conn.cursor()` | Creates a new Cursor for this session. |
| **33** | `    cursor.execute('''` | Starts a multi-line SQL block using triple quotes. |
| **34** | `        CREATE TABLE IF NOT EXISTS transactions (` | SQL command to start creating a table named `transactions`. |
| **35** | `            id INT AUTO_INCREMENT PRIMARY KEY,` | Defines `id` as a unique number that increases by 1 for every new row. |
| **36** | `            type ENUM('income', 'expense') NOT NULL,` | Restricts the `type` column to only 'income' or 'expense'. |
| **37** | `            amount DECIMAL(15, 2) NOT NULL,` | Defines `amount` as a precise number for money (15 digits, 2 decimals). |
| **38** | `            category VARCHAR(100) NOT NULL,` | Defines `category` as text up to 100 characters long. |
| **39** | `            date DATE NOT NULL,` | Defines `date` to store year-month-day information. |
| **40** | `            description TEXT` | Defines `description` as a flexible box for long notes/transcripts. |
| **41** | `        )` | Closes the table definition. |
| **42** | `    ''')` | Closes the triple-quoted SQL string. |
| **43** | `    conn.commit()` | Saves the new table structure to the database. |
| **44** | `    cursor.close()` | Closes the cursor. |
| **45** | `    conn.close()` | Disconnects from MySQL. |
| **46** | ` ` | Blank line. |
| **47** | `def add_transaction(t_type, amount, ...):` | Defines a function to save a new transaction into the table. |
| **48** | `    conn = get_db_connection()` | Connects to the database. |
| **49** | `    if not conn:` | Connection check. |
| **50** | `        return` | Stop if connection failed. |
| **51** | ` ` | Blank line. |
| **52** | `    cursor = conn.cursor()` | Opens a cursor for typing. |
| **53** | `    # MySQL parameterization ...` | Comment explaining why we use `%s` (for security). |
| **54** | `    query = '''` | Multi-line variable for our SQL "insert" command. |
| **55** | `        INSERT INTO transactions (type, ...)` | Specifies the columns we want to fill with data. |
| **56** | `        VALUES (%s, %s, %s, %s, %s)` | Uses 5 placeholders (`%s`) for the incoming data. |
| **57** | `    '''` | Closes the query string. |
| **58** | `    cursor.execute(query, (t_type, amount, ...))` | Fills the `%s` placeholders with real data and sends it to MySQL. |
| **59** | `    conn.commit()` | Permanently saves the new transaction. |
| **60** | `    cursor.close()` | Closes the cursor. |
| **61** | `    conn.close()` | Closes the connection. |
| **62** | ` ` | Blank line. |
| **63** | `def get_all_transactions():` | Defines a function to read all transactions from the database. |
| **64** | `    conn = get_db_connection()` | Connects to MySQL. |
| **65** | `    if not conn:` | Connection check. |
| **66** | `        return []` | Returns an empty list if there's no connection. |
| **67** | ` ` | Blank line. |
| **68** | `    cursor = conn.cursor(dictionary=True)` | Opens a cursor that returns rows as named dictionaries (easy to read). |
| **69** | `    cursor.execute('SELECT * FROM ...')` | Requests all data from the table, sorted by the latest date. |
| **70** | `    transactions = cursor.fetchall()` | Downloads the result of the "SELECT" command into a Python variable. |
| **71** | ` ` | Blank line. |
| **72** | `    # MySQL decimal types need ...` | Comment explaining a technical conversion for the web browser. |
| **73** | `    for t in transactions:` | Loops through every transaction one by one. |
| **74** | `        t['amount'] = float(t['amount'])` | Converts the price to a "Float" so the website can read it correctly. |
| **75** | `        t['date'] = str(t['date'])` | Converts the date to clear text ("string"). |
| **76** | ` ` | Blank line. |
| **77** | `    cursor.close()` | Closes the cursor. |
| **78** | `    conn.close()` | Closes the connection. |
| **79** | `    return transactions` | Sends the list of transactions back to whoever called it. |
| **80** | ` ` | Blank line. |
| **81** | `def delete_transaction(t_id):` | Defines a function to remove a transaction using its ID number. |
| **82** | `    conn = get_db_connection()` | Connects to MySQL. |
| **83** | `    if not conn:` | Connection check. |
| **84** | `        return` | Stop if failed. |
| **85** | ` ` | Blank line. |
| **86** | `    cursor = conn.cursor()` | Opens a cursor. |
| **87** | `    cursor.execute('DELETE FROM ...', (t_id,))` | SQL command to find and remove the specific row matching the ID. |
| **88** | `    conn.commit()` | Saves the deletion permanently. |
| **89** | `    cursor.close()` | Closes the cursor. |
| **90** | `    conn.close()` | Closes the connection. |
| **91** | ` ` | Blank line. |
| **92** | `def get_summary():` | Defines a function to calculate the mathematical total of income/exports. |
| **93** | `    conn = get_db_connection()` | Connects to MySQL. |
| **94** | `    if not conn:` | Connection check. |
| **95** | `        return {'total_income': 0.0, ...}` | Returns zeros if the connection failed. |
| **96** | ` ` | Blank line. |
| **97** | `    cursor = conn.cursor()` | Opens a cursor. |
| **98** | ` ` | Blank line. |
| **99** | `    cursor.execute("SELECT SUM(amount) ...")` | Asks MySQL to quickly add up all income rows. |
| **100** | `    income = float(cursor.fetchone()[0] or 0.0)` | Saves that sum into a Python variable named `income`. |
| **101** | ` ` | Blank line. |
| **102** | `    cursor.execute("SELECT SUM(amount) ...")` | Asks MySQL to quickly add up all expense rows. |
| **103** | `    expense = float(cursor.fetchone()[0] or 0.0)` | Saves that sum into a variable named `expense`. |
| **104** | ` ` | Blank line. |
| **105** | `    cursor.close()` | Closes the cursor. |
| **106** | `    conn.close()` | Closes the connection. |
| **107** | `    return {` | Starts building the final result dictionary. |
| **108** | `        'total_income': income,` | Puts the total income into the result. |
| **109** | `        'total_expense': expense,` | Puts the total expense into the result. |
| **110** | `        'balance': income - expense` | Calculates your net profit (Balance) on the fly. |
| **111** | `    }` | Closes the result dictionary. |
| **112** | ` ` | Blank line. |
| **113** | `if __name__ == '__main__':` | A special line that checks if YOU are running this file directly. |
| **114** | `    # Initialize the database ...` | Comment for the next line. |
| **115** | `    init_db()` | Runs the setup function to make sure your database is ready. |
| **116** | `    print("Database connection ...")` | Prints a confirmation message to tell you everything is Working. |
| **117** | ` ` | Final blank line. |

---
