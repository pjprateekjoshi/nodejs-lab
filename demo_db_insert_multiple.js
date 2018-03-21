var mysql = require('mysql');

var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"joshi@123",
	database:"mydb"
});

con.connect(function(err){
	if (err) throw err;
	console.log("connected to db");

	var sql = "INSERT INTO customers (name,address) VALUES ?";
	var values = [
		['A','Add1'],
		['B','Add2'],
		['C','Add3'],
		['D','Add4'],
		['E','Add5'],
		['F','add6'],
		['G','add7'],
		['H','add8'],
		['I','add9']
	];

	con.query(sql, [values], function(err,result){
		if (err) throw err;
		console.log("Number of records inserted: " + result.affectedRows);
	});
});


/*
	THE result OBJECT:-
{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
}*/