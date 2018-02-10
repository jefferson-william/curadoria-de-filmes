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
    amd.controller('MainController', MainController);

    MainController.$inject = ['$rootScope', '$scope', '$state', 'FilmSavedFactory'];

    function MainController ($rootScope, $scope, $state, FilmSavedFactory) {
        var self = this;

        self.Down = function (film) {
            FilmSavedFactory.Down(film);

            self.SetNextFilm();
        };

        self.Jump = function (film) {
            FilmSavedFactory.Jump(film);

            self.SetNextFilm();
        };

        self.Up = function (film) {
            FilmSavedFactory.Up(film);

            self.SetNextFilm();
        };

        self.SetNextFilm = function () {
            FilmSavedFactory.GetNextFilm().then(function (film) {
                self.film = film;
            });
        };

        self.SetNextFilm();
    }

    return MainController;
});
