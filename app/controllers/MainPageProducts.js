(function() {
	angular.module('shopApp').controller('MainPageProducts', ['ProductsModel',
		function(ProductsModel) {
			var mainPageProducts = this;
			mainPageProducts.list = [];

			ProductsModel.loadMainPage().then(function(result) { mainPageProducts.list = result; });
		}]
  );
})();
