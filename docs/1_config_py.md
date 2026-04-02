# 📁 `config.py`: Complete Line-by-Line Breakdown 📔

This document provides a **literal** explanation of every single line in `config.py`. No lines have been skipped.

---

### 🔍 Literal Line-by-Line Analysis

| Line # | **Code** | **Detailed Explanation** |
| :--- | :--- | :--- |
| **1** | `# MySQL Configuration ...` | This is a **Single-line Comment**. The `#` symbol tells Python to ignore everything on this line. It's used for documentation and notes. |
| **2** | `# ENTER YOUR MYSQL ...` | Another **Single-line Comment**. It provides a clear instruction to the developer to put their database login details here. |
| **3** | ` ` (Blank Line) | Blank lines are used to separate sections of code for readability. Python's parser ignores empty lines between commands. |
| **4** | `MYSQL_CONFIG = {` | This starts the definition of a **Dictionary variable** named `MYSQL_CONFIG`. The `{` symbol marks the beginning of the dictionary data structure. |
| **5** | `'host': 'localhost',` | This is a **Key-Value Pair**. `'host'` is the key (label), and `'localhost'` is the value (data). It tells the database driver to look for the SQL server on this computer. |
| **6** | `'user': 'root',` | Another **Key-Value Pair**. The key is `'user'`, and the value is `'root'`. `'root'` is the default administrative username for MySQL. |
| **7** | `'password': '1234',` | Another **Key-Value Pair**. The key is `'password'`, and the value is `'1234'`. This is the secret code used to authenticate your access. |
| **8** | `'database': 'finance_db'`| Another **Key-Value Pair**. The key is `'database'`, and the value is `'finance_db'`. It specifies which specific database name within MySQL to use. |
| **9** | `}` | This is the **Closing Brace**. It marks the end of the `MYSQL_CONFIG` dictionary definition that started on Line 4. |
| **10** | ` ` (Blank Line) | A final blank line at the end of the file. It's a standard coding practice to end files with a newline character. |

---

### 🎓 Interviewer Question for this file:
**"What is a Dictionary in Python and why is it used for configuration?"**
> *"A Dictionary is an unordered collection of items where data is stored in key-value pairs. It is the perfect choice for configuration because it allows us to look up specific settings (like 'host' or 'password') by their names instantly, making the code highly readable and organized."*

---
