angular.module('shopProducts', ['ngResource']);
angular.module('shopCategories', ['ngResource']);
angular.module('shopMenu', ['ngResource']);
angular.module('shopProduct', ['ngResource']);
angular.module('shopBanners', ['ngResource']);
angular.module('shopOrder', ['ngResource']);
angular.module('shopUser', ['ngResource']);
var shopApp = angular.module('shopApp', ['ngRoute', 'shopProducts', 'shopProduct', 'shopBanners', 'shopCategories', 'shopUser', 'shopMenu', 'shopOrder']);

shopApp.controller('ProductRatingController',
    function ($scope) {

    }
);

shopApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
          .when('/', {templateUrl: 'app/views/main_page.html'})
          .when('/login', {templateUrl: 'app/views/login.html'})
          .when('/cart', {templateUrl: 'app/views/cart.html', controller: 'CartController'})
          .when('/category/:id', {controller: 'CategoryController', templateUrl: 'app/views/category_page.html'})
          .when('/product/:id', {controller: 'ProductController', templateUrl: 'app/views/product_page.html'});
    }
]);

shopApp.filter('formatPrice',
    function() {
        return function (input) {
            if (input) {
                return input.toFixed(2) + ' PLN';
            } else {
                return '0.00 PLN';
            }
        }
    }
);
