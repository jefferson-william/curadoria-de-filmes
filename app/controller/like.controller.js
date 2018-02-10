'use strict';

define([
      'angular'
    , 'angularAMD'
    , 'app.module'
    , 'film-saved.factory'
], function (
      ng
    , amd
    , app
) {
    amd.controller('LikeController', LikeController);

    LikeController.$inject = ['$rootScope', '$scope', '$q', '$state', 'FilmSavedFactory'];

    function LikeController ($rootScope, $scope, $q, $state, FilmSavedFactory) {
        var self = this;

        self.films = FilmSavedFactory.GetUpFilms();
    }

    return LikeController;
});
