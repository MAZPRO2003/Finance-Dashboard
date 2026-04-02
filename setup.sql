CREATE DATABASE IF NOT EXISTS finance_db;
USE finance_db;

CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('income', 'expense') NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    description TEXT
);

INSERT INTO transactions (type, amount, category, date, description) 
VALUES ('income', 1000.00, 'Salary', CURDATE(), 'First Sample Transaction');

SELECT * FROM transactions;
