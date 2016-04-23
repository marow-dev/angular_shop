(function () {
    'use strict';
    angular.module('shopApp').controller('CategoryController',
        function ($routeParams, ProductsModel) {
            var category = this;
            ProductsModel.loadCategory($routeParams.id).then(function (result) { category.products = result; });
        });
}());
