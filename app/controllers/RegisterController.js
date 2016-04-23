(function () {
    'use strict';
    angular.module('shopApp').controller('RegisterController', ['UserModel',
        function (UserModel) {
            var register = this;
            register.userdata = {};
            register.isMessage = false;

            register.submit = function (userdata, isValid) {
                if (isValid) {
                    UserModel.register(userdata)
                        .then(function (res) {
                            register.isMessage = true;
                        }).catch(function (err) {
                            register.form.login.$setValidity('login', false);
                            register.form.pass.$setValidity('login', false);
                        });
                }
            };
        }]);
}());
