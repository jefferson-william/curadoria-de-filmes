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
    amd.controller('MainController', MainController);

    MainController.$inject = ['$rootScope', '$scope', '$state'];

    function MainController ($rootScope, $scope, $state) {
        var self = this;
    }

    return MainController;
});
