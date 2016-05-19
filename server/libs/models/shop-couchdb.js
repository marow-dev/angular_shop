var cradle = require('cradle');
var fs = require('fs');
var dbProducts = new (cradle.Connection)().database('products');
var dbShop = new (cradle.Connection)().database('shop');

function logError(err) {
    fs.writeFile('/var/log/couchdb-error.log', err);
}

exports.orders = {
    by_login: function (ident, cb) {
        dbShop.view('orders/login', {key: ident}, function (err, res) {
            var orderIds = [];
            if (res) {
                res.forEach(function (k, v) {
                    orderIds.push(v);
                });
                dbShop.all({limit: 10, keys: orderIds, include_docs: true}, function (err, res) {
                    if (res) {
                        cb(res, 200);
                    } else {
                        cb('', 404);
                    }
                });
            } else {
                cb('', 404);
            }
        });
    }
}

exports.order = {
    save: function (order, cb) {
        var data = {};
        data.customer = order.customer;
        data.cart = order.cart;
        data.num = Math.ceil(Math.random() * 10000);
        dbShop.save('ORDER' + data.num, data, function (err, res) {
            if (err) {
                cb('', 404);
            } else {
                cb('', 201);
            }
        });
    }
}

exports.login = {
	auth: function (params, cb) {
		function parseResult(err, res) {
			if (res.length == 0) {
				cb('', 401);
			} else {
				res = res[0];
				var dbPass = res.value;
				var pass = require('crypto').createHash('md5').update(params.pass).digest('hex');
				if (dbPass == pass) {
					dbShop.get(res.id, function(err, res) { cb(res); });
				} else {
					cb('', 401);
				}
			}
		}
		dbShop.view('users/login', {key: params.login}, parseResult);
	}
}

exports.register = {
	save: function (params, cb) {
		function parseResult(err, res) {
			if (res.length > 0) {
				cb('', 409);
			} else {
				dbShop.save(params.login, params, function(err, res) {
                    if (err) {
                        logError(err);
                    }
					cb('', res ? 201 : 500);
				});
			}
		}

		dbShop.view('users/login', {key: params.login}, parseResult);
	}
}

exports.products = {
	load: function (params, cb) {
		function parseResult(err, res) {
			var result = [];
			if (res) {
				result = res.map(function(item) { return item; });
			}
			cb(result);
		}
		if ( ! cb) {
			return false;
		}
		if (params.main_page) {
			dbProducts.view('products/mainpage', {'limit': 4}, parseResult);
		} else if (params.latest) {
			dbProducts.all({'limit': 4, 'include_docs': true, 'descending': true}, parseResult);
		} else if (params.related) {
			dbProducts.all({'limit': 4, 'include_docs': true, 'descending': true}, parseResult);
		} else if (params.category) {
			var that = this;
			dbProducts.view('products/category', {'key': parseInt(params.category)}, function(err, res) {
				var products = [];
				res.map(function (key) { products.push(key) });
				that.byIds(products, parseResult);
			});
		}
	},
	byIds: function (ids, cb) {
		dbProducts.get(ids, function (err, res) {
			cb(err, res ? res : []);
		});
	},
	byId: function (id, cb) {
		var ident = 'product_' + id;
		dbProducts.get(ident, function (err, res) {
			cb(res ? res : []);
		});
	}
}

exports.categories = {
	load: function (cb) {
		dbShop.get('categories', function (err, res) {
			cb(res ? res.list : []);
		});
	}
}

exports.menu = {
	load: function (cb) {
		dbShop.get('menu', function (err, res) {
			cb(res ? res.list : []);
		});
	}
}

exports.banners = {
	load: function (cb) {
		dbShop.view('banners/all', function (err, res) {
			var result = [];
			if (res) {
				result = res.map(function (item) { return item; });
			}
			cb(result);
		});
	}
}
