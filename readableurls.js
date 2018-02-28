var url = require('url');									//prepare to tamper with urls
adr = 'http://localhost/pathname/?year=3003&month=Feb';
var q = url.parse(adr,true);								//prepare to tamper with "adr" in particular

console.log(q.host);										//1. can differenciate the host from the rest of the url:adr
console.log(q.pathname);									//2. pathname
console.log(q.search);										//3. query

var qdata = q.query;			//returns an object {month = Feb ... etc.}

console.log(qdata.month);
