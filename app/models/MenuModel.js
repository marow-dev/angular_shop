(function() {
	angular.module('shopMenu').factory('MenuModel', ['$resource',
		function($resource) {
			return $resource('shop/menu', {}, {
				query: {method: 'GET', params: {}, isArray:true}
			});
		}]);
})();
