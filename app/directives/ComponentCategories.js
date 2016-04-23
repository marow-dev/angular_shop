(function() {
	angular.module('shopApp').directive('componentCategories', function() {
     return {
         restrict: 'E',
         replace: 'true',
         templateUrl: 'app/views/componentcategories.html'
     }
  });
})();
