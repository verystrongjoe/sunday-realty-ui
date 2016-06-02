var express = require('express');
//var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');


var express     = require('express'),
    app         = express();
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'admin',
  database : 'skeleton'
});



app.get('/mysql', function(req, res) {
    //res.sendfile(__dirname + '/express.html');
    connection.connect();

  	// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
	//   if (err) throw err;

	//   console.log('The solution is: ', rows[0].solution);
	// });

	var query = connection.query('select * from skeleton.realty', function(err,rows) {
	        console.log(rows);
	        res.send(rows);
	});

	connection.end();


});

app.listen(4002);
