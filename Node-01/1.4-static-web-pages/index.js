
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');


const server = http.createServer((request, response) => {
    const urlObject = url.parse(request.url);
    const path = urlObject.path;
    let fileSystemPath = '';

    if (path === '/') {
        fileSystemPath = 'static/index.html';
    } else {
        fileSystemPath = 'static${path}';
    }

    fs.stat(fileSystemPath, error => {
        if (!error) {
            fs.readFile(
                fileSystemPath, (error, file) => {
                    if (!error) {
                        const status = 200; // 
                        const mimeType = { 'Content-Type': 'text/plain' };
                        response.writeHead(status, mimeType);
                        response.write(file);
                        response.end();
                    } else {
                        const status = 500; // 
                        const mimeType = { 'Content-Type': 'text/plain' };
                        response.writeHead(status, mimeType);
                        response.write('Server fault');
                        response.end();
                    }
                });
        } else {
            const status = 404; // 
            const mimeType = { 'Content-Type': 'text/plain' };
            response.writeHead(status, mimeType);
            response.write('<html> <body> Not Found </body> </html>');
            response.end();
        }
    })
});

server.listen(7000);
console.log('Pages server...');