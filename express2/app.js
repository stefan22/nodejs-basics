var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//set port
const PORT = 3022;


//express instance
var app = express();


//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//bodyparser json, urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


//static server
app.use(express.static(path.join(__dirname, 'public')));

var users = [
	{
		id:1,
		first: 'John',
		last: 'Wilson',
		email:function() {
			return this.first + this.last + '@gmail.com';
		}
	},

	{
		id:2,
		first: 'Tony',
		last: 'MacKenny',
		email:function() {
			return this.first + this.last + '@gmail.com';
		}
	}

];

app.get('/', function(req,res) {
    res.render('index', {
        pageTitle: 'Customers',
        users: users
    });  

});









//listening
app.listen(3022, function(req,res) {
    console.log(`server listening on port ${PORT}`);
});