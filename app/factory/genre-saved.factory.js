'use strict';

define([
      'angular'
    , 'angularAMD'
    , 'app.module'
    , 'tmdb.resource'
], function (
      ng
    , amd
    , app
) {
    amd.factory('GenreSavedFactory', GenreSavedFactory);

    GenreSavedFactory.$inject = ['$q', '$localStorage', 'TmdbResource'];

    function GenreSavedFactory ($q, $localStorage, TmdbResource) {
        var self = this;

        self.Get = function (force) {
            if (self.genreMovieList && !force) return self.genreMovieList.$promise;

            self.genreMovieList = TmdbResource.genreMovieList(null, GetSuccess, GetError);

            return self.genreMovieList.$promise;
        };

        self.GetGenres = function () {
            return $localStorage.genres;
        };

        self.SetGenres = function (genres) {
            $localStorage.genres = genres;
        };

        self.InitSavedGenres = function () {
            $localStorage.genres = $localStorage.genres || [];
        };

        self.ReturnGenresByFilm = function (film) {
            var genres = self.GetGenres();

            return genres.filter(function (genre) {
                return film.genre_ids.indexOf(genre.id) !== -1;
            });
        };

        self.InitSavedGenres();
        self.Get();

        return self;

        function GetSuccess (data) {
            self.SetGenres(data.genres);
        }

        function GetError (data) {
        }
    }

    return GenreSavedFactory;
});
