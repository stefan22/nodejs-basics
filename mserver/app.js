const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// require routes
const index = require('./routes/index');
const users = require('./routes/users');
const dishRouter = require('./routes/dishRouter');
const locationRouter = require('./routes/locationRouter');
const promotionRouter = require('./routes/promotionRouter');

// mongo
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// dishes model
const Dishes = require('./models/dishes');
// locations model
const Locations = require('./models/locations');
// promotions model
const Promotions = require('./models/promotions');
// url connect
const url = 'mongodb://localhost:27017/testa';
// db connect
mongoose.connect(url, {
  useMongoClient: true  //gets rid of deprecated msg on connect method
})
  .then((db) =>   { 
    console.log(`connected to database: ${url} \n …………………………………………………………………………………………………………………………………………… endºf løgs`);  
}).catch((err) => { console.log(err); });



// express app instance
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// static server
app.use(express.static(path.join(__dirname, 'public')));

mongoose.set('debug',true);

//example
//var datafile = require('./data/data.json');
//setting some data avail across entire proj
//app.set('appdata', datafile);
//then in route
//var datafile = req.app.get('appdata');

// routes endpoints
app.use('/', index);
app.use('/users', users);
app.use('/dishes', dishRouter);
app.use('/locations', locationRouter);
app.use('/promotions', promotionRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
