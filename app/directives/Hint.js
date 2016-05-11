(function () {
    'use strict';
    angular.module('shopApp').directive('hint', function () {
        return function ($scope, element, attrs) {
            attrs.$observe('hint', function (val) {
                console.log('trigger-1', val);
                if (val.length > 0) {
                    val = JSON.parse(val);
                    if (val.message.length > 0) {
                        console.log('trigger-2', val);
                        $('#btnAdd2Cart').trigger('show_hint', val);
                    }
                }
            });
        };
    });
}());
