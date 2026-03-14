import http.server, socketserver, os, sys
os.chdir("dist")
PORT = 3000
handler = http.server.SimpleHTTPRequestHandler
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("0.0.0.0", PORT), handler) as httpd:
    print(f"Serving dist/ on port {PORT}", flush=True)
    httpd.serve_forever()
