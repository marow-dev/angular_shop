(function () {
    'use strict';
    angular.module('shopApp').controller('CartController', ['Cart', 'ProductModel',
        function (Cart, ProductModel) {
            var cart = this;

            cart.cart = Cart;
            cart.quantity = 1;
            cart.message = '';
            cart.addProduct = function (idProduct) {
                ProductModel.get(idProduct).then(function (product) {
                    console.log('msg-1', cart.message);
                    cart.message = '';
                    console.log('msg-2', cart.message);
                    if (Cart.addProduct(product, cart.quantity)) {
                        cart.message = JSON.stringify({message: 'Produkt został dodany do koszyka.', ts: new Date().getTime()});
                    }
                    console.log('msg-3', cart.message);
                });
            };
        }]);
}());
