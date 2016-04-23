(function () {
    'use strict';
    angular.module('shopApp').controller('ProductController', ['$routeParams', 'ProductModel',
        function ($routeParams, ProductModel) {
            var product = this;

            product.quantity = 1;
            product.idProduct = $routeParams.id;
            ProductModel.get(product.idProduct).then(function (result) { product.details = result; });
        }]);
}());
