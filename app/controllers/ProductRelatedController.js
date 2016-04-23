(function () {
    'use strict';
    angular.module('shopApp').controller('ProductRelatedController', ['$scope', 'ProductsModel',
        function ($scope, ProductsModel) {
            var productRelated = this;
            productRelated.list = [];

            ProductsModel.loadRelated($scope.idProduct).then(function (result) { productRelated.list = result; });
        }]);
}());
