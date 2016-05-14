var orm = require('./config/orm.js');
var express = require('express');
var bodyPaser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))


app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars',exphbs({
	defaultLayout: 'main'
}))
app.set('view engine', 'handlebars');


var mysql = require('mysql');
var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: '',
	database: 'burgers_db' 
});

connection.connect(function(err){
	if(err){
		console.error('error connecting: ' + err.stack);
		return;
	};
	console.log('connected as id ' + connection.threadId);
});


var port = 3000;
app.listen(port);


