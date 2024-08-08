//创建一个服务器
//ctrl+C:退出程序并关闭服务器
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('hello world a!\n');
}).listen(8888);

console.log('server running at http://localhost:8888/');