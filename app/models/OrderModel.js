(function () {
    'use strict';
    angular.module('shopOrder').factory('OrderModel', ['$resource',
        function ($resource) {
            return {
                save: function (user) {
                    var res = $resource('shop/order/NEW', {login: '@login'});
                    return res.save(user).$promise;
                }
            };
        }]);
}());
