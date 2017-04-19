var http = require('http');
var req = require('request');

var hostname = '127.0.0.1';
var port = 7774;

http.createServer(function (request, response) {
	req.post({
	  url:     'http://ycchen.im.ncnu.edu.tw/join.php',
	  form:    { '番茄': '40元', '香蕉': '50元' }
	}, function(error, res, body){
	  response.writeHead(200, { 'Content-Type': 'text/html'});
	  response.write(body);
  	  response.end();
	});
}).listen(port, hostname);