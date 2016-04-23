(function () {
    'use strict';
    angular.module('shopApp').service('Cart',
        function () {
            var products = [];
            var addProduct = function (product, cartCount) {
                var found = false, v;
                if (products.length) {
                    for (var v in products) {
                        if (products[v].id == product.id) {
                            products[v].cart_count = products[v].cart_count + parseInt(cartCount);
                            products[v].cart_price = products[v].cart_count * product.price;
                            found = true;
                        }
                    }
                }
                if (found === false) {
                    product.cart_count = cartCount;
                    product.cart_price = product.price;
                    products.push(product);
                }
            }
            var getProducts = function () {
                return products;
            }
            var getSum = function () {
                var sum = 0, v;
                if (products.length) {
                    for (var v in products)	{
                        sum = sum + (products[v].cart_price);
                    }
                }
                return sum;
            }
            var getItemsCount = function () {
                return products.length;
            }
            /**
             * Returns true if cart has items
             *
             * @method hasItems
             * @return {Boolean}
             */
            var hasItems = function () {
                return products.length > 0;
            }

            return {
                addProduct: addProduct,
                getProducts: getProducts,
                getSum: getSum,
                getItemsCount: getItemsCount,
                hasItems: hasItems
            }
        }
    );
})();
