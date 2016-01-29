var http = require('http');
var negentweeov = require('9292ov');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var ns = require('ns-api');
ns.username = 'xbindt@hotmail.com';
ns.password = 'gg3NJSUPGqdHZaKvmsmt5FVP8wvpF2JqEl-0rbWED8u0UE5ZcgTzdw';

var Router = require('node-simple-router');
var router = new Router({static_route: __dirname + "/dist"});

router.get("/9292", function(request, response) {

    negentweeov.journeys.plan(params, function(err){console.log(err)}, function(data) {
        response.writeHead(200, {"content-type":"application/json",'Access-Control-Allow-Origin' : '*'});
        data = JSON.stringify(data);
        response.end(data);
    });

});


//stations
router.get("/stations", function(request, response) {
    ns.stations(function( err, data ) {
        response.writeHead(200, {"content-type":"application/json"});
        data = JSON.stringify(data);
        response.end(data);
    });
});
//actueele vertrektijden
router.get("/vertrektijden", function(request, response) {
    console.log(request.get.station)
    ns.vertrektijden(request.get.station || '', function( err, data ) {
        //console.log( err || data );
        response.writeHead(200, {"content-type":"application/json"});
        data = JSON.stringify(data);
        response.end(data);
    });
});
//storingen
router.get("/storingen", function(request, response) {
    ns.storingen({station: request.get.station || '', actual:request.get.actual||false, unplanned: request.get.unplanned||false}, function( err, data ) {
        response.writeHead(200, {"content-type":"application/json"});
        data = JSON.stringify(data);
        response.end(data);
    });
});

var serve = serveStatic("./dist");

var server = http.createServer(router, function(req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
});


server.listen(3002);
