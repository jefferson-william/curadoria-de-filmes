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

    MainController.$inject = ['$rootScope', '$scope', '$state', 'TmdbResource'];

    function MainController ($rootScope, $scope, $state, TmdbResource) {
        var self = this;

        self.Get = function () {
            self.discoverMovie = TmdbResource.discoverMovie(null, GetSuccess, GetError);

            return self.discoverMovie.$promise;
        };

        function GetSuccess (response) {
        }

        function GetError (response) {
        }
    }

    return MainController;
});
