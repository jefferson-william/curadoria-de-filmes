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
    amd.controller('AppController', AppController);

    AppController.$inject = ['$rootScope', '$scope', '$state', '$mdSidenav'];

    function AppController ($rootScope, $scope, $state, $mdSidenav) {
        var self = this;

        $rootScope.$mdSidenav = $mdSidenav;
    }

    return AppController;
});
