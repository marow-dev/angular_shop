(function () {
    'use strict';
    angular.module('shopUser').factory('UserModel', ['$resource',
        function ($resource) {
            return {
                login: function (user) {
                    return $resource('shop/login?login=:login&pass=:pass', {login: user.login, pass: user.pass}).get().$promise;
                },
                register: function (user) {
                    var res = $resource('shop/customer/:login', {login: '@login'});
                    return res.save(user).$promise;
                }
            };
        }]);
}());
