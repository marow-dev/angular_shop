var cradle = require('cradle');
var dbProducts = new(cradle.Connection)().database('products');

var params = [
	{question: 'categories', param: 1},
	{question: 'categories', param: 2}
];

var f = function(params) {
	var promises = [];

	function generatePromise(param) {
		var func;
		if (param.question == 'categories') {
			func = function(resolve, reject) {
				dbProducts.all({'limit': 4, 'include_docs': true, 'descending': true}, function(err, res) { resolve(res); });
			}
		}

		if (func) {
			return new Promise(func);
		}
	}

	params.forEach(function(v) {
		promises.push(generatePromise(v));
	});

	Promise.all(promises).then(function(results) {
		var products = new Set();
		results.forEach(function(result) {
			result.forEach(function(product) {
				products.add(product._id);
			});
		});
	});
}

f(params);
