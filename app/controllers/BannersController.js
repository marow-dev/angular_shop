(function() {
	angular.module('shopApp').controller('BannersController', ['BannersModel',
		function(BannersModel) {
			var banners = this;
			banners.list = [];

			BannersModel.load().then(function(result) { banners.list = result; });
		}]
	);
})();
