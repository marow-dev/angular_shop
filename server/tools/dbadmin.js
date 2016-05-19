var cradle = require('cradle');

var dbProducts = new(cradle.Connection)().database('products');
var dbShop = new(cradle.Connection)().database('shop');

var operation = process.argv[2];
if ( ! operation) {
	console.log('No operation specified');
	process.exit();
}

if (operation == 'create') {
	console.log('Install database');
	dbProducts.exists(function (err, exists) {
	    if (err) {
			console.error('Database "products" exists error', err);
	    } else if (exists) {
			console.log('Database "products" already exists');
	    } else {
			dbProducts.create(function(err) {
				if (err) {
					console.error('Database "products" create error', err);
				} else {
					console.log('Database "products" has been created');
				}
			});
		}
	});
	dbShop.exists(function (err, exists) {
	    if (err) {
			console.error('Database "shop" exists error', err);
	    } else if (exists) {
			console.log('Database "shop" already exists');
	    } else {
			dbShop.create(function(err) {
				if (err) {
					console.error('Database "shop" create error', err);
				} else {
					console.log('Database "shop" has been created');
				}
			});
		}
	});
}

if (operation == 'products') {
	console.log('Import products');
	var data = [
		{
			id: 1,
			name: 'Sukienka biała 1',
			promo_name: 'wszystkie rozmiary',
			price: 10,
			photo_url: 'themes/images/ladies/1.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,2],
			main_page: 1
		},
		{
			id: 2,
			name: 'Sukienka czarna 2',
			promo_name: 'wszystkie rozmiary',
			price: 10,
			photo_url: 'themes/images/ladies/2.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,2],
			main_page: 1
		},
		{
			id: 3,
			name: 'Sukienka czarna 3',
			promo_name: 'wszystkie rozmiary',
			price: 10,
			photo_url: 'themes/images/ladies/3.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,2],
			main_page: 1
		},
		{
			id: 4,
			name: 'Sukienka czarna 4',
			promo_name: 'wszystkie rozmiary',
			price: 10,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [3,4],
			main_page: 1
		},
		{
			id: 5,
			name: 'Sukienka czarna 5',
			promo_name: 'wszystkie rozmiary',
			price: 10,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [3,4],
		},
		{
			id: 6,
			name: 'Sukienka czarna 6',
			promo_name: 'wszystkie rozmiary',
			price: 10,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [5],
		},
		{
			id: 7,
			name: 'Sukienka czarna 7',
			promo_name: 'wszystkie rozmiary',
			price: 177,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,5],
		},
		{
			id: 8,
			name: 'Sukienka zielona 8',
			promo_name: 'wszystkie rozmiary',
			price: 188,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,2],
		},
		{
			id: 9,
			name: 'Sukienka czarna 9',
			promo_name: 'wszystkie rozmiary',
			price: 999,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [5],
		},
		{
			id: 10,
			name: 'Sukienka czarna 10',
			promo_name: 'wszystkie rozmiary',
			price: 1010,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [2,3],
		},
		{
			id: 11,
			name: 'Sukienka 11',
			promo_name: 'wszystkie rozmiary',
			price: 111,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1],
		},
		{
			id: 12,
			name: 'Sukienka czarna 6',
			promo_name: 'wszystkie rozmiary',
			price: 122,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,2,3,4,5],
		},
		{
			id: 13,
			name: 'Sukienka czarna 6',
			promo_name: 'wszystkie rozmiary',
			price: 333,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,2],
		},
		{
			id: 14,
			name: 'Sukienka czarna 6',
			promo_name: 'wszystkie rozmiary',
			price: 444,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,2],
		},
		{
			id: 15,
			name: 'Sukienka czarna 6',
			promo_name: 'wszystkie rozmiary',
			price: 555,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,5],
		},
		{
			id: 16,
			name: 'Sukienka czarna 16',
			promo_name: 'wszystkie rozmiary',
			price: 5556,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,2],
		},
		{
			id: 17,
			name: 'Sukienka czarna 17',
			promo_name: 'wszystkie rozmiary',
			price: 177,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [],
		},
		{
			id: 18,
			name: 'Sukienka czarna 18',
			promo_name: 'wszystkie rozmiary',
			price: 10,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [5],
		},
		{
			id: 19,
			name: 'Sukienka zielona 19',
			promo_name: 'wszystkie rozmiary',
			price: 19,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [4,5],
		},
		{
			id: 20,
			name: 'Sukienka czarna 20',
			promo_name: 'wszystkie rozmiary',
			price: 2121,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1],
		},
		{
			id: 21,
			name: 'Sukienka czarna 21',
			promo_name: 'wszystkie rozmiary',
			price: 2121,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [2,3],
		},
		{
			id: 22,
			name: 'Sukienka czarna 22',
			promo_name: 'wszystkie rozmiary',
			price: 111,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,5],
		},
		{
			id: 23,
			name: 'Sukienka czarna 23',
			promo_name: 'wszystkie rozmiary',
			price: 33,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,5],
		},
		{
			id: 24,
			name: 'Sukienka czerwona 24',
			promo_name: 'wszystkie rozmiary',
			price: 444,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,5],
		},
		{
			id: 25,
			name: 'Sukienka czarna 25',
			promo_name: 'wszystkie rozmiary',
			price: 2444,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,2,3,5],
		},
		{
			id: 26,
			name: 'Sukienka czarna 26',
			promo_name: 'wszystkie rozmiary',
			price: 2223,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1],
		},
		{
			id: 27,
			name: 'Sukienka czarna 27',
			promo_name: 'wszystkie rozmiary',
			price: 10,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,4],
		},
		{
			id: 28,
			name: 'Sukienka czarna 28',
			promo_name: 'wszystkie rozmiary',
			price: 101,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1],
		},
		{
			id: 29,
			name: 'Sukienka zielona 29',
			promo_name: 'wszystkie rozmiary',
			price: 222,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1,2,3,4,5],
		},
		{
			id: 30,
			name: 'Sukienka czarna 30',
			promo_name: 'wszystkie rozmiary',
			price: 3030,
			photo_url: 'themes/images/ladies/4.jpg',
			properties: [{name: 'Brand', value: 'Adidas'}, {name: 'Availability', value: '10 days'}],
			description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
			gallery: ['themes/images/ladies/3.jpg', 'themes/images/ladies/4.jpg'],
			categories: [1],
		}
	];

	data.forEach(function(v) {
		dbProducts.save('product_' + v.id, v, function(err, res) {
			if (err) {
				console.log('PRODUCT: err', err);
				process.exit();
			} else {
				console.log('PRODUCT: ok');
			}
		});
	});
}

if (operation == 'destroy') {
	dbProducts.destroy(function(err) {
		if (err) {
			console.error('Database destroy error', err);
		} else {
			console.log('Database destroyed');
		}
	});
	dbShop.destroy(function(err) {
		if (err) {
			console.error('Database destroy error', err);
		} else {
			console.log('Database destroyed');
		}
	});
}

if (operation == 'views') {
	dbProducts.save('_design/products', {
		mainpage: {
			map: function(doc) {
				if (doc.main_page === 1) {
					emit(null, doc);
				}
			}
		},
		category: {
			map: function(doc) {
				if (doc.categories) {
					for (var category in doc.categories) {
						emit(doc.categories[category], doc._id);
					}
				}
			}
		}
	}, function(err) {
		if (err) {
			console.log('View "products" creation error', err);
		} else {
			console.log('View "products" created');
		}
	});

	dbShop.save('_design/banners', {
		all: {
			map: function(doc) {
				if (doc.type == 'banner') {
					emit(null, doc);
				}
			}
		}
	}, function(err) {
		if (err) {
			console.log('View "banners" creation error', err);
		} else {
			console.log('View "banners" created');
		}
	});

	dbShop.save('_design/users', {
		all: {
			map: function(doc) {
				if (doc.type == 'user') {
					emit(null, doc);
				}
			}
		},
		login: {
			map: function(doc) {
				if (doc.type == 'user') {
					emit(doc.login, doc.hash);
				}
			}
		}
	}, function(err) {
			if (err) {
				console.log('View "users" creation error', err);
			} else {
				console.log('View "users" created');
			}
		});
    dbShop.save('_design/orders', {
        login: {
            map: function (doc) {
                if (doc.customer && doc.customer.email) {
                    emit(doc.customer.email, doc._id);
                }
            }
        }
    }, function (err) {
        if (err) {
            console.log('View "orders" creation error', err);
        } else {
            console.log('View "orders" created');
        }
    });
}

if (operation == 'categories') {
	var categories = {
		'list': [
			{id: 1, name: 'Woman', subcategories: [{id: 11, name: 'Lacinia nibh'}, {id: 12, name: 'Eget molestie'}, {id: 13, name: 'Varius purus'}]},
			{id: 2, name: 'Man'},
			{id: 3, name: 'Sport'},
			{id: 4, name: 'Hangbag'},
			{id: 5, name: 'Bestseller'}
		]
	};
	dbShop.save('categories', categories, function(err, res) {
		if (err) {
			console.log('CATEGORIES: err', err);
			process.exit();
		} else {
			console.log('CATEGORIES: ok');
		}
	});
}

if (operation == 'menu') {
	var menu = {
		'list': [
			{
				name: 'Navigation',
				url: '',
				items: [
					{name: 'Homepage', url: '/'},
					{name: 'About Us', url: '/page/about'},
					{name: 'Contact Us', url: '/page/contact'},
					{name: 'Your Cart', url: '/cart'},
				]
			},
			{
				name: 'My Account',
				url: '',
				items: [
					{name: 'My Account', url: '/account'},
					{name: 'Order History', url: '/account/order_history'},
				]
			}
		]
	};
	dbShop.save('menu', menu, function(err, res) {
		if (err) {
			console.log('MENU: err', err);
			process.exit();
		} else {
			console.log('MENU: ok');
		}
	});
}

if (operation == 'banners') {
	var banners = [
		{
			type: 'banner',
			image_url: 'themes/images/carousel/banner-1.jpg',
			click_url: ''
		},
		{
			type: 'banner',
			image_url: 'themes/images/carousel/banner-2.jpg',
			click_url: ''
		},
	];
	dbShop.save(banners, function(err, res) {
		if (err) {
			console.log('BANNERS: err', err);
			process.exit();
		} else {
			console.log('BANNERS: ok');
		}
	});
}

if (operation == 'users') {
	var hash = require('crypto');
	var users = [
		{
			type: 'user',
			name: 'test',
			login: 'test@test.pl',
			hash: hash.createHash('md5').update('testtest').digest('hex')
		},
		{
			type: 'user',
			name: 'test2',
			login: 'test2@test.pl',
			hash: hash.createHash('md5').update('testtest2').digest('hex')
		}
	];
	dbShop.save(users, function(err, res) {
		if (err) {
			console.log('USERS: err', err);
			process.exit();
		} else {
			console.log('USERS: ok');
		}
	});
}
