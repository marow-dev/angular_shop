(function() {
	angular.module('shopApp').controller('MainPageCategoriesController',
      function($scope, CategoriesModel) {
          $scope.categories = CategoriesModel.query();
      }
  );
})();
