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
    amd.directive('appMenu', AppMenuDirective);

    AppMenuDirective.$inject = [];

    function AppMenuDirective () {
        return {
              restrict: 'E'
            , templateUrl: 'app/assets/partial/directive/menu.html'
            , controllerAs: 'Menu'
            , scope: {
                type: '@'
            }
            , controller: ['$scope', function ($scope) {
                var self = this;

                self.TypeIsNav = function () {
                    return !$scope.type;
                };
            }]
        };
    }

    return AppMenuDirective;
});
