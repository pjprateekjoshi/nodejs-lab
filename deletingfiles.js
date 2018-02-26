var fs = require('fs');

fs.unlink('myNewFile2', function(err){
	if(err) throw err;
	console.log('File has been deleted!');
});