var fs = require('fs');

fs.writeFile('newlyWRITTEN.txt','Is this the text to be going in?',function(err){
	if(err) throw err;
	console.log('file has been written');
});
