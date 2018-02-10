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
    amd.controller('NotLikeController', NotLikeController);

    NotLikeController.$inject = ['$rootScope', '$scope', '$q', '$state', 'FilmSavedFactory'];

    function NotLikeController ($rootScope, $scope, $q, $state, FilmSavedFactory) {
        var self = this;

        self.films = FilmSavedFactory.GetDownFilms();
    }

    return NotLikeController;
});
