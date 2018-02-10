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
    amd.directive('noResults', NoResultsDirective);

    NoResultsDirective.$inject = [];

    function NoResultsDirective () {
        return {
              restrict: 'E'
            , templateUrl: 'app/partial/directive/no-results.html'
        };
    }

    return NoResultsDirective;
});
