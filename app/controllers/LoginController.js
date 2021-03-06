(function () {
    'use strict';
    angular.module('shopApp').controller('LoginController', ['$scope', '$location', 'UserModel',
        function ($scope, $location, UserModel) {
            var login = this;

            login.userdata = {};
            login.submit = function (userdata, isValid) {
                if (isValid) {
                    UserModel.login(userdata).then(function (user) {
                        $scope.user.data.setUser({name: user.name, login: user.login});
                        $location.path('/');
                    }).catch(function (err) {
                        login.form.login.$setValidity('login', false);
                        login.form.pass.$setValidity('login', false);
                    });
                }
            };
        }]);
}());
