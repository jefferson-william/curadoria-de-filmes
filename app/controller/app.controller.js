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

    AppController.$inject = ['$rootScope', '$scope', '$state', '$mdSidenav', '$mdDialog'];

    function AppController ($rootScope, $scope, $state, $mdSidenav, $mdDialog) {
        var self = this;

        $rootScope.$mdSidenav = $mdSidenav;
        $rootScope.$mdDialog = $mdDialog;
        $rootScope.$state = $state;
    }

    return AppController;
});
