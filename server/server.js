(function () {
    'use strict';
    var http = require('http'),
        fs = require('fs'),
        qs = require('querystring'),
        model = require('./libs/models/shop-couchdb.js'),
        router = require('./libs/router/router.js'),
        port = process.argv[2];

    var settings = {
        root: '../'
    };

    var server = function (req, res) {
        function sendData(data, statusCode) {
            statusCode = statusCode || 200;
            if (statusCode === 200) {
                res.writeHead(200, {'content-type': 'application/json'});
                res.end(JSON.stringify(data));
            } else {
                res.writeHead(statusCode);
                res.end();
            }
        }

        function sendOk() {
            res.writeHead(200);
            res.end();
        }

        function sendError(statusCode) {
            res.writeHead(statusCode);
            res.end();
        }

        function parsePost() {
            var body = '';
            req.on('data', function (data) {
                body += data;
            });
            req.on('end', function () {
                if (req.headers['content-type'].indexOf('application/json') !== false) {
                    body = JSON.parse(body);
                }
                var route = new router.Route(req, body);
                if (route.isRoute()) {
                    var func = routes.get(route.getTarget(), route.getMethod());
                    if (func === false) {
                        sendError(400);
                    }
                    if (typeof func === 'function') {
                        func(route.getIdent(), route.getParams());
                    }
                }
            });
        }

        function parseGet() {
            var route = new router.Route(req);
            if (route.isRoute()) {
                var func = routes.get(route.getTarget(), route.getMethod());
                if (func === false) {
                    sendError(400);
                }
                if (typeof func === 'function') {
                    func(route.getIdent(), route.getParams());
                }
            } else {
                var pathname = route.getParsedUrl().pathname.substr(1);
                if (pathname.length === 0) {
                    pathname = 'index.html';
                }
                pathname = settings.root + pathname;
                if (fs.existsSync(pathname)) {
                    var rs = fs.createReadStream(pathname);
                    rs.pipe(res);
                } else {
                    res.end();
                }
            }
        }

        function parseRequest() {
            if (req.method === 'GET') {
                parseGet();
            } else if (req.method === 'POST') {
                parsePost();
            }
        }

        var routes = new router.Routes();
        routes.add('login', 'GET', function (ident, params) {
            model.login.auth(params, sendData);
        });
        routes.add('categories', 'GET', function (ident, params) {
            model.categories.load(sendData);
        });
        routes.add('banners', 'GET', function (ident, params) {
            model.banners.load(sendData);
        });
        routes.add('menu', 'GET', function (ident, params) {
            model.menu.load(sendData);
        });
        routes.add('products', 'GET', function (ident, params) {
            if (ident === 'mainpage') {
                model.products.load({'main_page': 1}, sendData);
            } else if (ident === 'latest') {
                model.products.load({'latest': 1}, sendData);
            } else if (ident === 'related') {
                model.products.load({'related': 1}, sendData);
            } else if (ident === 'category') {
                model.products.load({'category': params.id}, sendData);
            }
        });
        routes.add('product', 'GET', function (ident, params) {
            model.products.byId(ident, sendData);
        });
        routes.add('customer', 'POST', function (ident, params) {
            params.login = ident;
            model.register.save(params, sendData);
        });
        routes.add('order', 'POST', function (ident, params) {
            model.order.save(params, sendData);
        })

        return {
            sendData: sendData,
            sendOk: sendOk,
            sendError: sendError,
            parseRequest: parseRequest
        };
    }

    http.createServer(function(req, res) {
        server(req, res).parseRequest();
    }).listen(port);
}());
