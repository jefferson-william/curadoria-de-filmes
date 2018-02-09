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
    amd.controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$rootScope', '$scope', '$state'];

    function HeaderController ($rootScope, $scope, $state) {
        var self = this;
    }

    return HeaderController;
});
