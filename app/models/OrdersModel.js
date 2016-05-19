(function () {
    'use strict';
    angular.module('shopProducts').factory('OrdersModel', ['$resource',
        function ($resource) {
            return {
                loadByLogin: function (login) {
                    return $resource('shop/account_orders', {login: login}).query().$promise;
                },
            };
        }]);
}());
