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
    amd.directive('filmDetail', FilmDetailDirective);

    FilmDetailDirective.$inject = [];

    function FilmDetailDirective () {
        return {
              restrict: 'E'
            , templateUrl: 'app/partial/directive/film-detail.html'
            , controllerAs: 'FilmDetail'
            , scope: {
                data: '='
            }
            , controller: ['$scope', function ($scope) {
                var self = this;
            }]
        };
    }

    return FilmDetailDirective;
});
