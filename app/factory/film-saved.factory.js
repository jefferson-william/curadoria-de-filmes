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
            if (self.get && !force) return self.get.$promise;

            var data = angular.copy($localStorage.filmsFilter);

            self.get = TmdbResource.list(data, GetSuccess, GetError);

            return self.get.$promise;
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
            var force = false;

            force = self.ReturnIfForceLoadFilmsAndSetNewPage();
            force = self.ReturnIfForceLoadFilmsAndSetNewList();

            self.Get(force).then(function (data) {
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

            $localStorage.filmsFilter.from++;
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

        self.ReturnDefaultFilter = function () {
            return angular.copy({
                  id: 1
                , page: 1
                , total_pages: null
                , total_results: null
                , from: 0
                , total_per_page: 20
                , sort_by: 'release_date.desc'
            });
        };

        self.SetFilter = function (data) {
            $localStorage.filmsFilter = $localStorage.filmsFilter || self.ReturnDefaultFilter();

            if (!data) return;

            $localStorage.filmsFilter.id = data.id;
            $localStorage.filmsFilter.page = data.page;
            $localStorage.filmsFilter.total_pages = data.total_pages;
            $localStorage.filmsFilter.total_results = data.total_results;
            $localStorage.filmsFilter.sort_by = data.sort_by;
        };

        self.ReturnIfForceLoadFilmsAndSetNewPage = function () {
            if ($localStorage.filmsFilter.from >= ($localStorage.filmsFilter.total_per_page * $localStorage.filmsFilter.page)) {
                $localStorage.filmsFilter.page++;

                return true;
            }

            return false;
        };

        self.ReturnIfForceLoadFilmsAndSetNewList = function () {
            if ($localStorage.filmsFilter.from >= $localStorage.filmsFilter.total_results && $localStorage.filmsFilter.total_results) {
                var listId = $localStorage.filmsFilter.id;

                $localStorage.filmsFilter = self.ReturnDefaultFilter();
                $localStorage.filmsFilter.id = ++listId;

                return true;
            }

            return false;
        };

        self.SetFilter();
        self.InitSavedFilms();
        self.Get();

        return self;

        function GetSuccess (data) {
            self.SetFilter(data);

            response = data;
            films = data.results;
        }

        function GetError (data) {
        }
    }

    return FilmSavedFactory;
});
