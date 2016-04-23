(function () {
    'use strict';
    angular.module('shopApp').controller('CartController', ['Cart', 'ProductModel',
        function (Cart, ProductModel) {
            var cart = this;

            cart.cart = Cart;
            cart.quantity = 1;
            cart.addProduct = function (idProduct) {
                ProductModel.get(idProduct).then(function (product) {
                    Cart.addProduct(product, cart.quantity);
                });
            };
        }]);
}());
