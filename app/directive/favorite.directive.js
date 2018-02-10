'use strict';

define([
      'angular'
    , 'angularAMD'
    , 'app.module'
], function (
      ng
    , amd
    , app
) {
    amd.directive('favorite', FavoriteDirective);

    FavoriteDirective.$inject = [];

    function FavoriteDirective () {
        return {
              restrict: 'E'
            , templateUrl: 'app/partial/directive/favorite.html'
            , controllerAs: 'Favorite'
            , scope: {
                number: '@'
            }
            , controller: ['$scope', function ($scope) {
                var self = this
                    , number = Math.round(+$scope.number / 2);

                self.down = (new Array(5)).fill('').map(NumberReturn);
                self.up = !number ? [] : (new Array(number)).fill('').map(NumberReturn);

                function NumberReturn (value, i) {
                    return i;
                }
            }]
        };
    }

    return FavoriteDirective;
});
