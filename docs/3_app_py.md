# 📁 `app.py`: Complete Line-by-Line Breakdown 📔

This document provides a **literal** explanation of every single line in `app.py`, ensuring a 100% complete understanding.

| Line # | **Code** | **Detailed Explanation** |
| :--- | :--- | :--- |
| **1** | `import http.server` | Imports the built-in Python module for creating web servers. |
| **2** | `import socketserver` | Imports the module used for handling network connections (TCP/IP). |
| **3** | `import json` | Imports the library used to convert data between Python and the Browser's JSON format. |
| **4** | `import os` | Imports the operating system module (can be used for file paths). |
| **5** | `import urllib.parse` | Imports tools used to understand and "clean up" the website's URL paths. |
| **6** | `from database import ...` | Imports all the database logic (saving, loading, deleting) from your `database.py` file. |
| **7** | ` ` | Blank line for readability. |
| **8** | `PORT = 5001` | Sets the "door number" for your app. You visit the site at `localhost:5001`. |
| **9** | ` ` | Blank line. |
| **10** | `class DashboardHandler(...)`| Defines a custom "Rulebook" for how the server should handle web requests. |
| **11** | `    def do_GET(self):` | Defines the function that runs when someone tries to **view** the page. |
| **12** | `        parsed_path = ...` | Takes the URL you typed and breaks it down for the server to understand. |
| **13** | `        path = parsed_path.path` | Isolates the specific path (like `/` or `/script.js`) from the URL. |
| **14** | `        ` | Blank line. |
| **15** | `        if path == '/':` | Checks: "Is the user asking for the main homepage?" |
| **16** | `            self.send_response(200)` | Sends a status code of 200, which means "Success/OK." |
| **17** | `            self.send_header(...)` | Tells the browser that the data coming next is an HTML file. |
| **18** | `            self.end_headers()` | Ends the "envelope" of the message; now we part the actual data. |
| **19** | `            with open('index.html', 'rb') as f:` | Opens your `index.html` file in "Read-Binary" mode. |
| **20** | `                self.wfile.write(f.read())` | Sends the entire content of `index.html` to the browser's screen. |
| **21** | `            return` | Finishes this specific request and stops the function. |
| **22** | `            ` | Blank line. |
| **23** | `        if path == '/style.css':` | Checks: "Is the user asking for the CSS styling file?" |
| **24** | `            self.send_response(200)` | Sends Success code. |
| **25** | `            self.send_header(...)` | Tells the browser that the data coming next is a CSS file. |
| **26** | `            self.end_headers()` | Formality to end the header section. |
| **27** | `            with open('style.css', 'rb') as f:` | Opens your stylesheet. |
| **28** | `                self.wfile.write(f.read())` | Sends the CSS code to the browser. |
| **29** | `            return` | Stops the function. |
| **30** | `            ` | Blank line. |
| **31** | `        if path == '/script.js':` | Checks: "Is the user asking for the JavaScript code?" |
| **32** | `            self.send_response(200)` | Sends Success code. |
| **33** | `            self.send_header(...)` | Tells the browser that the data is a JavaScript file. |
| **34** | `            self.end_headers()` | Formality. |
| **35** | `            with open('script.js', 'rb') as f:` | Opens your JavaScript logic file. |
| **36** | `                self.wfile.write(f.read())` | Sends the JS code to the browser. |
| **37** | `            return` | Stops the function. |
| **38** | `            ` | Blank line. |
| **39** | `        if path == '/api/transactions':` | Checks: "Is the user asking for the actual database data?" |
| **40** | `            self.send_response(200)` | Sends Success code. |
| **41** | `            self.send_header(...)` | Tells the browser that the data is in JSON format. |
| **42** | `            self.end_headers()` | Formality. |
| **43** | `            data = {` | Creates a Python dictionary to bundle the data together. |
| **44** | `                'transactions': ...` | Fills 'transactions' with data from `database.py`. |
| **45** | `                'summary': ...` | Fills 'summary' with totals from `database.py`. |
| **46** | `            }` | Closes the data bundle. |
| **47** | `            self.wfile.write(...)` | Converts the Python data to JSON and sends it to the web page. |
| **48** | `            return` | Stops the function. |
| **49** | ` ` | Blank line. |
| **50** | `        self.send_error(404, ...)` | If the path wasn't found (like `/abcd`), it sends a "Not Found" error. |
| **51** | ` ` | Blank line. |
| **52** | `    def do_POST(self):` | Defines the function that runs when someone clicks "Add Transaction." |
| **53** | `        if self.path == '/api/transactions':` | Checks: "Is the user trying to add a new transaction?" |
| **54** | `            content_length = ...` | Asks the browser: "How many letters/numbers are in this message?" |
| **55** | `            post_data = ...` | Reads the actual message based on the length we just found. |
| **56** | `            data = json.loads(...)` | Converts the browser's JSON text back into a Python computer object. |
| **57** | `            ` | Blank line. |
| **58** | `            t_type = data.get('type')` | Extracts if it was 'income' or 'expense' from the data. |
| **59** | `            amount = float(...)` | Extracts the total amount and makes sure it's treated as a number. |
| **60** | `            category = data.get('category')` | Extracts which category was picked (Food, Rent, etc.). |
| **61** | `            date = data.get('date')` | Extracts the date of the transaction. |
| **62** | `            description = ...` | Extracts the notes/transcript, or leaves it blank if empty. |
| **63** | `            ` | Blank line. |
| **64** | `            add_transaction(...)` | Calls the `database.py` command to officially save this to MySQL. |
| **65** | `            ` | Blank line. |
| **66** | `            self.send_response(200)` | Tells the browser everything was saved successfully. |
| **67** | `            self.send_header(...)` | Confirms the response type is JSON. |
| **68** | `            self.end_headers()` | Formality. |
| **69** | `            self.wfile.write(...)` | Sends a "Success" message back to the JavaScript. |
| **70** | `            return` | Stops the function. |
| **71** | ` ` | Blank line. |
| **72** | `    def do_DELETE(self):` | Defines the function that runs when you click the "X" or Delete button. |
| **73** | `        if self.path.startswith(...):` | Checks: "Is the user trying to delete a specific transaction ID?" |
| **74** | `            try:` | Starts a "Safety Check" block in case something goes wrong. |
| **75** | `                t_id = int(...)` | Pulls the ID number from the end of the URL. |
| **76** | `                delete_transaction(t_id)` | Calls the `database.py` command to remove this row from MySQL. |
| **77** | `                self.send_response(200)` | Sends Success code. |
| **78** | `                self.send_header(...)` | Confirms response type. |
| **79** | `                self.end_headers()` | Formality. |
| **80** | `                self.wfile.write(...)` | Sends Success message back to the page. |
| **81** | `            except Exception as e:` | If line 75 or 76 failed, it catches the error here. |
| **82** | `                self.send_error(400, ...)` | Sends a "Bad Request" error back to the user. |
| **83** | `            return` | Stops the function. |
| **84** | ` ` | Blank line. |
| **85** | `# Ensure database is initialized` | A comment reminding us to prepare the DB before starting the server. |
| **86** | `init_db()` | Calls the setup function from `database.py` to create tables if needed. |
| **87** | ` ` | Blank line. |
| **88** | `with socketserver.TCPServer(...)` | Starts the actual network engine using your Port and Rulebook. |
| **89** | `    print(...)` | Prints a message to your terminal so you know the app is ready. |
| **90** | `    try:` | Starts a loop to keep the server running forever. |
| **91** | `        httpd.serve_forever()` | The actual "Start" button that makes the server wait for users. |
| **92** | `    except KeyboardInterrupt:` | If you press Ctrl+C, it catches that command. |
| **93** | `        print("Stopping server...")` | Prints a final message as the server shuts down. |
| **94** | ` ` | Final blank line. |

---
