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

    MainController.$inject = ['$rootScope', '$scope', '$state', 'FilmSaved'];

    function MainController ($rootScope, $scope, $state, FilmSaved) {
        var self = this;

        self.Down = function (film) {
            FilmSaved.Down(film);

            self.SetNextFilm();
        };

        self.Jump = function (film) {
            FilmSaved.Jump(film);

            self.SetNextFilm();
        };

        self.Up = function (film) {
            FilmSaved.Up(film);

            self.SetNextFilm();
        };

        self.SetNextFilm = function () {
            FilmSaved.GetNextFilm().then(function (film) {
                self.film = film;
            });
        };

        self.SetNextFilm();
    }

    return MainController;
});
