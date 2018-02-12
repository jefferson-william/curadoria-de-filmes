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
    amd.directive('filmRating', FilmRatingDirective);

    FilmRatingDirective.$inject = [];

    function FilmRatingDirective () {
        return {
              restrict: 'E'
            , templateUrl: 'app/partial/directive/film-rating.html'
            , controllerAs: 'FilmRating'
            , scope: {
                rating: '@'
            }
            , controller: ['$scope', function ($scope) {
                var self = this;
            }]
        };
    }

    return FilmRatingDirective;
});
