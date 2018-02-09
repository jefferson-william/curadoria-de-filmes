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
    amd.service('TmdbResource', TmdbResource);

    TmdbResource.$inject = ['$resource', 'TMDB'];

    function TmdbResource ($resource, TMDB) {
        return $resource(TMDB.URL_API, {}, {
            'discoverMovie': {
                  url: TMDB.URL_API + '/discover/movie'
                , method: 'GET'
                , params: {
                    api_key: TMDB.API_KEY
                }
            }
            , 'movie': {
                  url: TMDB.URL_API + '/movie/:moveId'
                , method: 'GET'
                , params: {
                    api_key: TMDB.API_KEY
                }
            }
        });
    }

    return TmdbResource;
});
