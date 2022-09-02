const http = require('http');
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'}); // khoi tao
    
    res.end('Khoi tao xong roi');
});

server.listen(3000, '127.0.0.1');
console.log('Server running on port 3000');

