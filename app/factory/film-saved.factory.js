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
    amd.factory('FilmSaved', FilmSavedDirective);

    FilmSavedDirective.$inject = ['$q', '$localStorage', 'TmdbResource'];

    function FilmSavedDirective ($q, $localStorage, TmdbResource) {
        var self = this
            , response = {}
            , films = []
            ;

        self.Get = function (force) {
            if (self.discoverMovie && !force) return self.discoverMovie.$promise;

            self.discoverMovie = TmdbResource.discoverMovie(null, GetSuccess, GetError);

            return self.discoverMovie.$promise;
        };

        self.GetFilms = function () {
            return self.GetFilmsJumped();
        };

        self.GetFilmsJumped = function () {
            return films.filter(function (film) {
                return film.id;
            });
        };

        self.GetNextFilm = function () {
            var defer = $q.defer();

            self.Get().then(function (data) {
                var f = data.results.filter(function (film) {
                    var jumped = self.GetJumpedFilms().filter(function (fm) {
                        return film.id === fm.id;
                    });

                    return !jumped.length || jumped[0].id !== film.id;
                });

                return defer.resolve(f[0]);
            });

            return defer.promise;
        };

        self.GetDownFilms = function () {
            return $localStorage.downFilms = $localStorage.downFilms || [];
        };

        self.GetJumpedFilms = function () {
            return $localStorage.jumpedFilms = $localStorage.jumpedFilms || [];
        };

        self.GetUpFilms = function () {
            return $localStorage.upFilms = $localStorage.upFilms || [];
        };

        self.InitSavedFilms = function () {
            self.GetDownFilms();
            self.GetJumpedFilms();
            self.GetUpFilms();
        };

        self.Down = function (film) {
            $localStorage.downFilms.push(film);
        };

        self.Jump = function (film) {
            $localStorage.jumpedFilms.push(film);
        };

        self.Up = function (film) {
            $localStorage.upFilms.push(film);
        };

        self.InitSavedFilms();
        self.Get();

        return self;

        function GetSuccess (data) {
            response = data;
            films = data.results;
        }

        function GetError (data) {
        }
    }

    return FilmSavedDirective;
});
