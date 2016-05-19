(function() {
	angular.module('shopApp').controller('OrdersController',
      function (OrdersModel) {
			var orders = this;

            OrdersModel.loadByLogin('test@test.pl').then(function (result) { orders.list = result; });
      }
  );
})();
