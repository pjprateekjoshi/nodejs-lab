var mysql = require('mysql');

var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"joshi@123",
	database:"mydb"
});

con.connect(function(err) {
	if (err) throw err;
	console.log('Connected!');

	var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";

	con.query(sql,function(err,result){
		if (err) {throw err;}
		console.log("If you need ID, only one record can be inserted at number:" + result.insertId);
	});
});
