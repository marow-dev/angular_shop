(function () {
    'use strict';
    angular.module('shopProducts').factory('ProductsModel', ['$resource',
        function ($resource) {
            return {
                loadMainPage: function () {
                    return $resource('shop/products/mainpage', {}).query().$promise;
                },
                loadLatest: function () {
                    return $resource('shop/products/latest', {}).query().$promise;
                },
                loadRelated: function () {
                    return $resource('shop/product/related', {}).query().$promise;
                },
                loadCategory: function (id) {
                    return $resource('shop/products/category', {id: id}).query().$promise;
                }
            };
        }]);
}());
