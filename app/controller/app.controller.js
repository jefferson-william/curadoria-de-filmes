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

    AppController.$inject = ['$rootScope', '$scope', '$state'];

    function AppController ($rootScope, $scope, $state) {
        var self = this;
    }

    return AppController;
});
