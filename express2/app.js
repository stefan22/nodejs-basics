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
        pageTitle: 'Home page',
        users: users,
        image:'homepage.png',
        width:640,
        height:533
    });  

});

app.get('/all_customers', function(req,res) {
    res.render('index', {
        pageTitle: 'All Customers page',
        users: users,
        image:'allcustomers.jpg',
        width:1024,
        height:534
    });  

});

app.get('/new_customer', function(req,res) {
    res.render('index', {
        pageTitle: 'New Customer page',
        users: users,
        image:'newcustomer.jpg',
        width:699,
        height:400
    });  

});









//listening
app.listen(3022, function() {
    console.log(`server listening on port ${PORT}`);
});
