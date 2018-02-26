//ALL COMMENTS ARE PROBABILISTIC

var http = require('http');					//loads the module http, built in

http.createServer(function(req,res){		//syntax createServer(function(req,res){content shown in browser}).listen(PORT);
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('Hello World!');
	console.log('Prateeeeeek!')				//this is printed to the terminal each time the browser page is refreshed
}).listen(8080);
