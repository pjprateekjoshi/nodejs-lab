var fs = require('fs');

fs.rename('myNewFile2.txt', 'nowRenamed.txt', function(err){
	if(err) throw err;
	console.log('File renamed successfully!');
});
