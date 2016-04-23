(function() {
	angular.module('shopApp').controller('FooterController', ['MenuModel',
		function(MenuModel) {
			var footer = this;

			footer.menu = MenuModel.query();
		}]
	);
})();
