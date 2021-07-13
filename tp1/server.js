const http = require('http');

http.createServer((req,res)=>{
res.writeHead(200,{'Content-type':'text/plain'})
res.end('Bye word from NodeJS !!!');
}).listen(8185, 'localhost');
console.log('Server running on port 8185');