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
                  average: '='
            }
            , controller: ['$scope', function ($scope) {
                var self = this;

                self.Active = function (average, $index) {
                    return $index <= (self.up - 1);
                };

                self.Set = function (average) {
                    self.down = (new Array(5)).fill('').map(NumberReturn);
                    self.up = average ? Math.round(average / 2) : 0;
                };

                $scope.$watch('average', function (a) {
                    self.Set(a);
                });

                function NumberReturn (value, i) {
                    return i;
                }
            }]
        };
    }

    return FavoriteDirective;
});
