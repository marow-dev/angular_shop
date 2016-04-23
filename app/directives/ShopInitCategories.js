(function() {
	angular.module('shopApp').directive('shopInitCategories', function() {
     return function($scope, element, attrs)  {
          if ($scope.$last) {
              $('#menu > ul').superfish({
                  delay:       100,
                  animation:   {opacity:'show', height:'show'},
                  speed:       'fast',
                  arrowClass: false,
                  autoArrows:  true
              });
          }
     }
  });
})();
