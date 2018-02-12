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
                , actions: '='
                , maxSize: '@'
            }
            , controller: ['$scope', 'FilmSavedFactory', function ($scope, FilmSavedFactory) {
                var self = this;

                self.FilmSavedFactory = FilmSavedFactory;
            }]
            , link: function (scope, element, attrs, controllers, transclude) {
                var self = this
                    , haveSize = scope.maxSize === undefined || scope.maxSize ? true : false;

                scope.Main = scope.$parent.$parent.Main;

                transclude(scope, function (clone, scope) {
                    haveSize && element.addClass('max-size-' + scope.maxSize);

                    element.append(clone);
                });
            }
        };
    }

    return FilmDirective;
});
