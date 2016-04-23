(function() {
	angular.module('shopCategories').factory('CategoriesModel', ['$resource',
	function($resource, params) {
		params = params || {};
		return $resource('shop/categories', {}, {
			query: {method: 'GET', params: params, isArray: true}
		});
	}]);
})();
