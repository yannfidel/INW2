const http = require('http')

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('content-type','text/plain');
    res.end('Hello, Node.js Server')
});


const port = 3000;
server.listen(port, () =>{
    console.log(`servidor executando em http://localhost:${port}/`)
});