(function() {
	angular.module('shopApp').service('User',
		function() {
			var defaultUser = {
				name: 'Gość',
				login: null,
				guest: 1
			}
			var loggedUser = Object.assign({}, defaultUser);
			var getName = function() {
				return loggedUser.name;
			}
			var getLogin = function() {
				return loggedUser.login;
			}
			var setUser = function(user) {
				loggedUser.name = user.name;
				loggedUser.login = user.login;
				loggedUser.guest = 0;
			}
			var isLogged = function() {
				return loggedUser.guest === 0;
			}
			var isGuest = function() {
				return loggedUser.guest === 1;
			}
			var logout = function() {
				loggedUser = Object.assign({}, defaultUser);
			}
			return {
				getName: getName,
				getLogin: getLogin,
				setUser: setUser,
				isLogged: isLogged,
				isGuest: isGuest,
				logout: logout
			}
		}
	);
})();
