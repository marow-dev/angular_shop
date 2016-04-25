(function () {
    'use strict';

    /**
     * Cart item object - wrapper around product.
     *
     * @class CartItem
     * @constructor
     */
    function CartItem(product) {
        this.product = product;
        this.vCartCount = 1;
        this.addCount = function (addValue) {
            this.vCartCount = parseInt(this.vCartCount, 10) + parseInt(addValue, 10);
        };
        this.cartCount = function (newValue) {
            if (newValue === undefined) {
                return this.vCartCount;
            }
            this.vCartCount = newValue;
        };
        this.photoUrl = function () {
            return this.product.photo_url;
        };
        this.id = function () {
            var id = this.product._id.split('_')[1];
            return id;
        };
        this.price = function () {
            return this.product.price;
        };
        this.name = function () {
            return this.product.name;
        };
        this.cartPrice = function () {
            return this.vCartCount * this.product.price;
        };
        this.compare = function (product) {
            return product._id === this.product._id;
        };
    }

    angular.module('shopApp').service('Cart',
        function () {
            var items = [];
            /**
             * Adds product to the cart. If product exists in cart changes its count.
             *
             * @method addProduct
             * @param {Object} product
             * @param {Number} cartCount
             * @return {Boolean} Return true on success
             */
            var addProduct = function (product, cartCount) {
                var found = false, v;
                if (items.length) {
                    for (var v in items) {
                        if (items[v].compare(product)) {
                            items[v].addCount(cartCount);
                            found = true;
                        }
                    }
                }
                if (found === false) {
                    var item = new CartItem(product, cartCount);
                    items.push(item);
                }
                return true;
            }
            var getItems = function () {
                return items;
            }
            /**
             * Returns sum of items in cart
             *
             * @method getSum
             * @return {Number}
             */
            var getSum = function () {
                var sum = 0, v;
                if (items.length) {
                    for (var v in items)	{
                        sum = sum + (items[v].cartPrice());
                    }
                }
                return sum;
            }
            /**
             * Return number of items in cart
             *
             * @method getItemsCount
             * @return {Number}
             */
            var getItemsCount = function () {
                return items.length;
            }
            /**
             * Returns true if cart has items
             *
             * @method hasItems
             * @return {Boolean}
             */
            var hasItems = function () {
                return items.length > 0;
            }

            return {
                addProduct: addProduct,
                getItems: getItems,
                getSum: getSum,
                getItemsCount: getItemsCount,
                hasItems: hasItems
            }
        }
    );
})();
