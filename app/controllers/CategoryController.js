(function() {
	angular.module('shopApp').controller('CategoryController',
		function($routeParams, ProductsModel) {
			var category = this;

			category.products = ProductsModel.query({'category': $routeParams.id});
		}
  );
})();
