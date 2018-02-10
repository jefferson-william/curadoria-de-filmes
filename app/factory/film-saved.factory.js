'use strict';

define([
      'angular'
    , 'angularAMD'
    , 'app.module'
    , 'tmdb.resource'
    , 'film-backdrop.factory'
], function (
      ng
    , amd
    , app
) {
    amd.factory('FilmSavedFactory', FilmSavedFactory);

    FilmSavedFactory.$inject = ['$q', '$localStorage', 'moment', 'TmdbResource', 'FilmBackdropFactory'];

    function FilmSavedFactory ($q, $localStorage, moment, TmdbResource, FilmBackdropFactory) {
        var self = this
            , response = {}
            , films = []
            , currentFilm = {}
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
                function ReturnResultFiltered (data) {
                    return data.results.filter(function (film) {
                        var jumped = self.GetJumpedFilms().filter(function (fm) {
                            return film.id === fm.id || currentFilm.id === fm.id;
                        });

                        return !jumped.length || jumped[0].id !== film.id;
                    });
                };

                var f = ReturnResultFiltered(data);

                if (currentFilm.hasOwnProperty('id') && f.filter(function (film) { return film.id === currentFilm.id; }).length) {
                    self.Jump(currentFilm);
                }

                self.SetCurrentFilm(currentFilm = f[0]);

                return defer.resolve(currentFilm);
            });

            return defer.promise;
        };

        self.GetCurrentFilm = function () {
            var defer = $q.defer();

            self.Get().then(function (data) {
                if (angular.isObject(currentFilm) && currentFilm.hasOwnProperty('id')) {
                    return defer.resolve(currentFilm);
                }

                self.GetNextFilm().then(function (film) {
                    self.SetCurrentFilm(currentFilm = film);

                    return defer.resolve(film);
                });
            });

            return defer.promise;
        };

        self.SetCurrentFilm = function (film) {
            currentFilm = film;

            FilmBackdropFactory.Set(film);
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
            self.TreatFilmBeforeSave(film);

            if (!$localStorage.downFilms.filter(function (f) { return f.id === film.id; }).length) {
                $localStorage.downFilms.push(film);
            }

            self.Jump(film);
        };

        self.Jump = function (film) {
            self.TreatFilmBeforeSave(film);

            if (!$localStorage.jumpedFilms.filter(function (f) { return f.id === film.id; }).length) {
                $localStorage.jumpedFilms.push(film);
            }
        };

        self.Up = function (film) {
            self.TreatFilmBeforeSave(film);

            if (!$localStorage.upFilms.filter(function (f) { return f.id === film.id; }).length) {
                $localStorage.upFilms.push(film);
            }

            self.Jump(film);
        };

        self.TreatFilmBeforeSave = function (film) {
            film.moved = moment().toDate().getTime();
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

    return FilmSavedFactory;
});
