(function () {
    'use strict';
    angular.module('shopApp').controller('OrderController', ['$scope', '$http', 'Cart',
        function ($scope, $http, Cart) {
            $scope.submit = function (customer, isValid) {
                if (isValid) {
                    $http.post('shop/order', {'customer': customer, 'cart': Cart.getProducts()});
                }
            };
        }]);
}());
