(function() {
	angular.module('shopApp').controller('UserController', ['$scope', 'User',
		function($scope, User) {
			var user = this;

			user.data = User;
		}]
	);
})();
