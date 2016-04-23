var url = require('url');

function Route(req, post) {
    post = post || {};
    function parsePath() {
        var split = parsedUrl.path.split('/');
        var ident = '';
        if (split[1] == 'shop') {   // TODO: Prefix do ustawień
            if (split[3]) {
                ident = split[3].replace(parsedUrl.search, '');
            }
            return {
                'target': split[2].replace(parsedUrl.search, ''),
                'ident': ident
            }
        } else {
            return {
                'target': 'none',
                'ident': ident,
            }
        }
    }

    var method = req.method;
    var parsedUrl = url.parse(req.url, true);
    var path = parsePath();

    this.getMethod = function() {
        return method;
    };

    this.getTarget = function() {
        return path.target;
    };

    this.getIdent = function() {
        return path.ident;
    };

    this.getParsedUrl = function() {
        return parsedUrl;
    };

    this.getParams = function() {
        if (Object.keys(post).length > 0) {
            var params = {};
            Object.keys(post).forEach(function(key) {
                params[key] = post[key];
            });
            Object.keys(parsedUrl.query).forEach(function(key) {
                params[key] = parsedUrl.query[key];
            });
            return params;
        } else {
            return parsedUrl.query;
        }
    };

    this.isRoute = function() {
        return path.target !== 'none';
    };
};

function Routes() {
    var routes = {};

    this.add = function (object, method, func) {
        if ( ! routes[object]) {
            routes[object] = {};
        }
        routes[object][method] = func;
    };

    this.get = function(object, method) {
        if ( ! routes[object]) {
            return false;
        } else {
            if ( ! routes[object][method]) {
                return false;
            } else {
                return routes[object][method];
            }
        }
    };

    this.all = function() {
        return routes;
    };
};

module.exports = {
    Route: Route,
    Routes: Routes
};
