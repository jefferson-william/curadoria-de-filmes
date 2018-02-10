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
            , templateUrl: 'app/partial/directive/film.html'
            , controllerAs: 'Film'
            , scope: {
                data: '='
            }
            , controller: ['$scope', 'TMDB', function ($scope, TMDB) {
                var self = this;

                self.TMDB = TMDB;
            }]
        };
    }

    return FilmDirective;
});
