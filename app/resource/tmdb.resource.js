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
    amd.service('TmdbResource', TmdbResource);

    TmdbResource.$inject = ['$resource', 'TMDB'];

    function TmdbResource ($resource, TMDB) {
        return $resource(TMDB.URL_API, {}, {
            'discoverMovie': {
                  url: TMDB.URL_API + '/discover/movie'
                , method: 'GET'
                , params: {
                        api_key: TMDB.API_KEY
                      , language: 'pt-BR'
                }
            }
            , 'movie': {
                  url: TMDB.URL_API + '/movie/:moveId'
                , method: 'GET'
                , params: {
                        api_key: TMDB.API_KEY
                      , language: 'pt-BR'
                }
            }
            , 'genreMovieList': {
                  url: TMDB.URL_API + '/genre/movie/list'
                , method: 'GET'
                , params: {
                        api_key: TMDB.API_KEY
                      , language: 'pt-BR'
                }
            }
        });
    }

    return TmdbResource;
});
