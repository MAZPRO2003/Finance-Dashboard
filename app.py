import http.server
import socketserver
import json
import os
import urllib.parse
from database import init_db, add_transaction, get_all_transactions, delete_transaction, get_summary

PORT = 5001

class DashboardHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urllib.parse.urlparse(self.path)
        path = parsed_path.path
        
        if path == '/':
            self.send_response(200)
            self.send_header('Content-Type', 'text/html')
            self.end_headers()
            with open('index.html', 'rb') as f:
                self.wfile.write(f.read())
            return
            
        if path == '/style.css':
            self.send_response(200)
            self.send_header('Content-Type', 'text/css')
            self.end_headers()
            with open('style.css', 'rb') as f:
                self.wfile.write(f.read())
            return
            
        if path == '/script.js':
            self.send_response(200)
            self.send_header('Content-Type', 'application/javascript')
            self.end_headers()
            with open('script.js', 'rb') as f:
                self.wfile.write(f.read())
            return
            
        if path == '/api/transactions':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            data = {
                'transactions': get_all_transactions(),
                'summary': get_summary()
            }
            self.wfile.write(json.dumps(data).encode())
            return

        self.send_error(404, "File not found")

    def do_POST(self):
        if self.path == '/api/transactions':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode())
            
            t_type = data.get('type')
            amount = float(data.get('amount'))
            category = data.get('category')
            date = data.get('date')
            description = data.get('description', '')
            
            add_transaction(t_type, amount, category, date, description)
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'success'}).encode())
            return

    def do_DELETE(self):
        if self.path.startswith('/api/transactions/'):
            try:
                t_id = int(self.path.split('/')[-1])
                delete_transaction(t_id)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'status': 'success'}).encode())
            except Exception as e:
                self.send_error(400, str(e))
            return

init_db()

with socketserver.TCPServer(("", PORT), DashboardHandler) as httpd:
    print(f"Personal Finance Dashboard running at http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("Stopping server...")
