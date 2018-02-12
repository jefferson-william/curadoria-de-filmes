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
    amd.controller('FilmDetailController', FilmDetailController);

    FilmDetailController.$inject = ['$rootScope', '$scope', '$q', '$state', '$mdDialog', 'FilmSavedFactory'];

    function FilmDetailController ($rootScope, $scope, $q, $state, $mdDialog, FilmSavedFactory) {
        var self = this;

        self.Close = function () {
            $state.go('^');
        };

        self.FilmSavedFactory = FilmSavedFactory;

        self.getCurrentFilm = FilmSavedFactory.GetCurrentFilm($state.params.id).then(function (data) {
            self.data = data;
        });
    }

    return FilmDetailController;
});
