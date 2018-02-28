var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
	q = url.parse(req.url,true);
	var fileaddr = "." + q.pathname;

	fs.readFile(fileaddr,function(err,data){
		if(err){
			console.log(err);
			res.write('404 not found');
			return res.end();
		}
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		return res.end();
	});

}).listen(8080);
