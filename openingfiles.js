var fs = require('fs');

fs.open('myNewFile2.txt','w', function(err){		// syntax: fs.open('filename','mode:r/w/other',function(err){if(err) throw err; ...});
	if(err) throw err;
	console.log('File Saved! But it would be blank.');
});