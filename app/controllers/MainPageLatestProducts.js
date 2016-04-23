(function() {
	angular.module('shopApp').controller('MainPageLatestProducts', ['ProductsModel',
		function(ProductsModel) {
			var mainPageLatestProducts = this;
			mainPageLatestProducts.list = [];

			ProductsModel.loadLatest().then(function(result) { mainPageLatestProducts.list = result; });
		}]
  );
})();
