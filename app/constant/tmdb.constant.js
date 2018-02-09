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
        , API_KEY: 'bfac0a33de8be3c3e55c709388c56bd5',
    };

    amd.constant('TMDB', TMDB);

    return TMDB;
});
