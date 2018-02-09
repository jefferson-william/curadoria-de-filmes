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
    amd.controller('FooterController', FooterController);

    FooterController.$inject = ['$rootScope', '$scope', '$state'];

    function FooterController ($rootScope, $scope, $state) {
        var self = this;
    }

    return FooterController;
});
