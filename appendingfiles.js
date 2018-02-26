var fs = require('fs');

//syntax fs.appendFile('filename', 'content to append', function(err){if(err) throw err;});

fs.appendFile('myNewFile.txt', 'New text appears!', function(err){
	if(err) throw err;
	console.log('Saved!');
});
