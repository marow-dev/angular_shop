model = require('./libs/models/shop-couchdb.js'),

model.orders.by_login({login: 'test@test.pl'}, function () {
    // console.log('CALLBACK');
});
