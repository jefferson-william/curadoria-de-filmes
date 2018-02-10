'use strict';

define([
      'angular'
    , 'angularAMD'
    , 'app.module'
    , 'tmdb.constant'
], function (
      ng
    , amd
    , app
) {
    amd.factory('FilmBackdropFactory', FilmBackdropFactory);

    FilmBackdropFactory.$inject = ['$rootScope', 'TMDB'];

    function FilmBackdropFactory ($rootScope, TMDB) {
        var self = this;

        self.Set = function (film) {
            $rootScope.filmBackgropUrl = $rootScope.filmBackgropUrl || '';

            if (!ng.isObject(film)) return;
            
            $rootScope.filmBackgropUrl = TMDB.URL_BACKDROP_PATH + film.backdrop_path;
        };

        self.Set();

        return self;
    }

    return FilmBackdropFactory;
});
