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
            , controller: [
                  '$scope'
                , '$state'
                , '$mdSidenav'
                , function (
                      $scope
                    , $state
                    , $mdSidenav
                ) {
                var self = this;

                $scope.$state = $state;

                self.TypeIsNav = function () {
                    return !$scope.type;
                };

                self.Go = function (stateName) {
                    $state.go(stateName);

                    $mdSidenav('nav').close();
                };
            }]
        };
    }

    return AppMenuDirective;
});
