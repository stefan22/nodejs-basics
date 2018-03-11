var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nconf = require('nconf');
var winston = require('winston');
var nunjucks = require('nunjucks');

var index = require('./routes/index');
var users = require('./routes/users');

//winston logger
winston.log('info','init app.js winston logs');


var app = express();


//nunjucks
nunjucks.configure('views', {
  //auto escape,html open
  autoescape: true,
  //pass app instance to express
  express: app
});

//nconf argv
nconf.argv({
  'p': {
    'alias':'http:port',
    'describe':'The port to listen on'
  }
});

nconf.env('__');

nconf.defaults({
  "http": {
    "port":3007
  },
  "logger": {
    "filelevel":"error"
  }
});

//nconf config
nconf.file('config.json');

//winstontransports | error & above log to a file/else to console
winston.add(winston.transports.File, {filename: "error.log", level: nconf.get("logger:filelevel")});


//test winston
winston.info('nconf','endof nconf files');
winston.info("HTTP Config: ", nconf.get("http"));
winston.info('app.js: -> endof console messages', '\n-----------------------------\n');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//express to render nunjucks html
app.set('view engine', 'html');


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