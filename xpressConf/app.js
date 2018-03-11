var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nconf = require('nconf');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//nconf argv
nconf.argv({
  'p': {
    'alias':'http:port',
    'describe':'The port to listen on'
  }
});

nconf.env('__');

//nconf defaults
nconf.defaults({
  'http': {
    'port': 3005
  }
});

//nconf config
nconf.file('config.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'xpressConf/public')));

app.use('/', index);
app.use('/users', users);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handler
app.use(function(err, req, res, next) {
  // set locals, only error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;