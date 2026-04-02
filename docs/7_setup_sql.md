# 📁 `setup.sql`: Complete Line-by-Line Breakdown 📔

This document provides a **literal** explanation for every single line of `setup.sql`. No lines have been skipped.

| Line # | **Code** | **Detailed Explanation** |
| :--- | :--- | :--- |
| **1** | `-- Personal Finance Dashboard ...` | A **SQL Comment**. The `--` tells MySQL to ignore this line. It's used for the title. |
| **2** | `-- Step 1: Open MySQL Workbench` | A Comment giving the first instruction for setup. |
| **3** | `-- Step 2: Copy and paste ...` | A Comment giving the second instruction for setup. |
| **4** | ` ` | Blank line. |
| **5** | `CREATE DATABASE ...;` | Command to build the `finance_db` folder inside MySQL if it doesn't exist. |
| **6** | `USE finance_db;` | Tells MySQL to enter the `finance_db` folder for all following commands. |
| **7** | ` ` | Blank line. |
| **8** | `CREATE TABLE ... (` | Command to start building the "Spreadsheet" (table) for our data. |
| **9** | `    id INT AUTO_INC... KEY,` | Creates a unique ID number (1, 2, 3...) for every row. |
| **10** | `    type ENUM(...) NOT NULL,` | Restricts the "Type" column to only allow 'income' or 'expense'. |
| **11** | `    amount DECIMAL... NOT NULL,` | Creates a precise number column for money (Total 15 digits, 2 decimals). |
| **12** | `    category VAR... NOT NULL,` | Creates a text box for categories (up to 100 characters). |
| **13** | `    date DATE NOT NULL,` | Creates a column to store the year, month, and day. |
| **14** | `    description TEXT` | Creates a large text box for notes or voice transcripts. |
| **15** | `);` | Closes the table creation command. |
| **16** | ` ` | Blank line. |
| **17** | `-- OPTIONAL: Add a sample...` | A comment for the next "test" block of code. |
| **18** | `INSERT INTO transactions ...` | Specifies which columns we want to fill with sample data. |
| **19** | `VALUES ('income', ..., 'First...');` | The actual sample data: ₹1000 Salary on today's date. |
| **20** | ` ` | Blank line. |
| **21** | `SELECT * FROM transactions;` | A command to "Show me everything" inside the table so we can see the data. |
| **22** | ` ` | Final blank line. |

---
