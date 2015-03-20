var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
var AppBuilder = require("./custom_modules/AppBuilder");
var passport = require('passport');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var Routes=require('./routes');

//set the base dir of project in global, This is done to maintain the correct base.
global.__appBaseDir = __dirname;

app.enable('trust proxy'); // Need for nginx X-Forwarded-* headers

// Parsing json and urlencoded requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
// Initializing passport authentication middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'client')));
Routes.init(app);

AppBuilder.initConfig(config);

//Initialize the Logger. this is available in the "log" global object.
var logOnStdOut = _config.logger.stdout.enabled;
AppBuilder.initLogger(function (message, level) {
    if (logOnStdOut) {
        //Print on console the fully formatted message
        console.log(message.fullyFormattedMessage);
    }
});
/**
 * Different setup for 'development' and 'production' modes
 * @type {string}
 */
var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    // Development-mode-specific configuration
    log.info('Node is running in development mode');
//    app.use(morgan('dev'));
}
else {
    // Production-mode-specific configuration goes here...
    log.info('Node is running in production mode');
}

/**
 * Server init and start
 */


var server = app.listen(config.expressPort);

function stopWebServer() {
    server.close(function() {
        log.info('Webserver shutdown');
        process.exit();
    });
}
var gracefulShutdown = function() {
    log.info("Received kill signal, shutting down Webserver gracefully.");
    stopWebServer();
    // if after
    setTimeout(function() {
        log.error("Could not close connections in time, forcefully shutting down webserver");
        process.exit();
    }, 10 * 1000);
};

// Ctrl + C
process.on('SIGINT', gracefulShutdown);

// listen for TERM signal .e.g. kill
process.on('SIGTERM', gracefulShutdown);

process.on('uncaughtException', function(err) {
    log.error("Uncaught Exception: " + err);
    log.error("Stack: " + err.stack);
    process.exit(1);
});

log.info('Express server listening on port:', config.expressPort);
