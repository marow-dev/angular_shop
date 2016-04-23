(function () {
    'use strict';
    angular.module('shopProduct').factory('ProductModel', ['$resource',
        function ($resource) {
            return {
                get: function (id) {
                    return $resource('shop/product/' + id, {}).get().$promise;
                }
            };
        }]);
}());
