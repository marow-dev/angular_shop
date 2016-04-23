(function() {
	angular.module('shopApp').controller('ProductsController',
      function(ProductsModel) {
			var products = this;

  			products.list = ProductsModel.query({'category': 3});
      }
  );
})();
