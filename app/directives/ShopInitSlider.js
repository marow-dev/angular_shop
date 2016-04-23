(function() {
	angular.module('shopApp').directive('shopInitSlider', function() {
    return function($scope, element, attrs) {
      if ($scope.$last) {
          $('.flexslider').flexslider({
              animation: "fade",
              slideshowSpeed: 4000,
              animationSpeed: 600,
              controlNav: false,
              directionNav: true,
              controlsContainer: ".flex-container"
          });
      }
    };
  });
})();
