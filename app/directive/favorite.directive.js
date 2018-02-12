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
                  average: '@'
            }
            , controller: ['$scope', function ($scope) {
                var self = this
                    , average = Math.round(+$scope.average / 2);

                self.Active = function (average) {
                    return average <= (self.up - 1);
                };

                self.down = (new Array(5)).fill('').map(NumberReturn);
                self.up = average;

                function NumberReturn (value, i) {
                    return i;
                }
            }]
        };
    }

    return FavoriteDirective;
});
