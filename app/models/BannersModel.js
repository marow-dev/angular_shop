(function() {
	angular.module('shopBanners').factory('BannersModel', ['$resource',
		function($resource) {
			return {
				load: function() {
					return $resource('shop/banners', {}).query().$promise;
				}
			}
		}]);
})();
