'use strict';

define([
      'angular'
    , 'angularAMD'
    , 'app.module'
    , 'film-saved.factory'
    , 'genre-saved.factory'
], function (
      ng
    , amd
    , app
) {
    amd.controller('MainController', MainController);

    MainController.$inject = ['$rootScope', '$scope', '$q', '$state', 'FilmSavedFactory', 'GenreSavedFactory'];

    function MainController ($rootScope, $scope, $q, $state, FilmSavedFactory, GenreSavedFactory) {
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
            $q
                .all([
                      FilmSavedFactory.GetNextFilm()
                    , GenreSavedFactory.Get()
                ])
                .then(function (data) {
                    var film = data[0];
                    
                    film.genres = GenreSavedFactory.ReturnGenresByFilm(data[0]);

                    self.film = film;
                });
        };

        self.SetNextFilm();
    }

    return MainController;
});
