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
    amd.directive('film', FilmDirective);

    FilmDirective.$inject = [];

    function FilmDirective () {
        return {
              restrict: 'E'
            , transclude: true
            , templateUrl: 'app/partial/directive/film.html'
            , controllerAs: 'Film'
            , scope: {
                data: '='
            }
            , controller: ['$scope', 'TMDB', function ($scope, TMDB) {
                var self = this;

                self.TMDB = TMDB;
            }]
            , link: function (scope, element, attrs, controllers, transclude) {
                var self = this;

                scope.Main = scope.$parent.$parent.Main;

                transclude(scope, function (clone, scope) {
                    element.append(clone);
                });
            }
        };
    }

    return FilmDirective;
});
