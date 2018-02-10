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
    var TMDB = {
          URL_API: 'https://api.themoviedb.org/3'
        , API_KEY: 'bfac0a33de8be3c3e55c709388c56bd5'
        , URL_POSTER_PATH: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'
        , URL_BACKDROP_PATH: 'https://image.tmdb.org/t/p/w1400_and_h450_face/'
    };

    amd.constant('TMDB', TMDB);

    return TMDB;
});
