var express = require('express'),
    http = require('http'),
    path = require('path'),
    mongoose = require('mongoose');

var app = express();

app.set('port', 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.cookieParser(process.env.COOKIE_SECRET));
app.use(express.session({ secret: 'cool beans' }));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){
    res.render('index');
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});