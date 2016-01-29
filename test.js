var http = require("http");
var connect = require('connect');
var send = require('send');
var url = require('url');

var app = http.createServer(function(req, res){
// your custom error-handling logic:
    function error(err) {
        res.statusCode = err.status || 500;
        res.end(err.message);
    }

// your custom directory handling logic:
    function redirect() {
        res.statusCode = 301;
        res.setHeader('Location', req.url + '/');
        res.end('Redirecting to ' + req.url + '/');
    }

    function setRoot(){
        res.setHeader("Access-Control-Allow-Origin",

            "http://example.com");

        return './public';
    }

    function setIndex(){
        res.setHeader("Access-Control-Allow-Origin",

            "http://example.com");

        return '/index.html';
    }


    send(req, url.parse(req.url).pathname)
        .root(setRoot()).index(setIndex())
        .on('error', error)
        .on('directory', redirect)
        .pipe(res);
}).listen(3000);/**
 * Created by xbindt on 1/25/2016.
 */
