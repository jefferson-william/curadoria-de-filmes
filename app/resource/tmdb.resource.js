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
        return $resource(TMDB.URL_API_3, {}, {
            'discoverMovie': {
                  url: TMDB.URL_API_3 + '/discover/movie'
                , method: 'GET'
                , params: {
                      api_key: TMDB.API_KEY
                    , page: 1
                    , language: 'pt-BR'
                }
            }
            , 'movie': {
                  url: TMDB.URL_API_3 + '/movie/:moveId'
                , method: 'GET'
                , params: {
                      api_key: TMDB.API_KEY
                    , page: 1
                    , language: 'pt-BR'
                }
            }
            , 'genreMovieList': {
                  url: TMDB.URL_API_3 + '/genre/movie/list'
                , method: 'GET'
                , params: {
                      api_key: TMDB.API_KEY
                    , page: 1
                    , language: 'pt-BR'
                }
            }
            , 'list': {
                  url: TMDB.URL_API_4 + '/list/:id'
                , method: 'GET'
                , params: {
                      api_key: TMDB.API_KEY
                    , page: 1
                    , language: 'pt-BR'
                    , sort_by: 'release_date.desc'
                }
                ,  headers: {
                    'Authorization': 'Bearer ' + TMDB.ACCESS_TOKEN
                }
            }
        });
    }

    return TmdbResource;
});
