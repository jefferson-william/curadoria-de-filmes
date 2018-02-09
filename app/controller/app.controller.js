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
    ng.module('app').controller('AppController', AppController);

    AppController.$inject = ['$rootScope', '$scope', '$timeout', '$state', '$mdToast'];

    function AppController ($rootScope, $scope, $timeout, $state, $mdToast) {
        var self = this;
    }

    return AppController;
});
