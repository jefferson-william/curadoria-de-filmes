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
          URL_API_3: 'https://api.themoviedb.org/3'
        , URL_API_4: 'https://api.themoviedb.org/4'
        , API_KEY: 'bfac0a33de8be3c3e55c709388c56bd5'
        , ACCESS_TOKEN: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmFjMGEzM2RlOGJlM2MzZTU1YzcwOTM4OGM1NmJkNSIsInN1YiI6IjVhN2Q5ZGFhOTI1MTQxNTUwOTAwNjE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dA1Rd25WHWLw9esvyPXI0kKHPh8qfge4LhOIABsbg84'
        , URL_POSTER_PATH: 'https://image.tmdb.org/t/p/w500/'
        , URL_BACKDROP_PATH: 'https://image.tmdb.org/t/p/w1400_and_h450_face/'
    };

    amd.constant('TMDB', TMDB);

    return TMDB;
});
