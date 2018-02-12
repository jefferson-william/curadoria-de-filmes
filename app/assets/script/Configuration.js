'use strict';

requirejs.config({
      urlArgs: null
    , waitSeconds: 0
    , paths: {
          'require': 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min'
        , 'normalize-css': 'bower_components/normalize.css/normalize'
        , 'css-builder': 'bower_components/require-css/css-builder'
        , 'normalize': 'bower_components/require-css/normalize'
        , 'modernizr': 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min'
        , 'css': 'https://cdnjs.cloudflare.com/ajax/libs/require-css/0.1.10/css.min'
        , 'moment': 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min'
        , 'angular': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min'
        , 'angularAMD': 'https://cdn.jsdelivr.net/angular.amd/0.2.0/angularAMD.min'
        , 'angular-animate': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-animate.min'
        , 'angular-aria': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-aria.min'
        , 'angular-cookies': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-cookies.min'
        , 'angular-resource': 'https://cdnjs.cloudflare.com/ajax/libs/angular-resource/1.6.9/angular-resource.min'
        , 'angular-sanitize': 'https://cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.6.9/angular-sanitize.min'
        , 'angular-ui-router': 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.min'
        , 'ngStorage': 'bower_components/ngstorage/ngStorage'
        , 'angularMaterial': 'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.7/angular-material.min'
        , 'angularMaterialCss': 'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.7/angular-material.min'
        , 'app.module': 'app/module/app.module'
        , 'app-css': 'app/assets/style/app'
        , 'app.state': 'app/state/app.state'
        , 'app.controller': 'app/controller/app.controller'
        , 'header.controller': 'app/controller/header.controller'
        , 'main.controller': 'app/controller/main.controller'
        , 'main-css': 'app/assets/style/main'
        , 'footer.controller': 'app/controller/footer.controller'
        , 'tmdb.resource': 'app/resource/tmdb.resource'
        , 'tmdb.constant': 'app/constant/tmdb.constant'
        , 'menu.directive': 'app/directive/menu.directive'
        , 'menu-css': 'app/assets/style/menu'
        , 'film.directive': 'app/directive/film.directive'
        , 'film-css': 'app/assets/style/film'
        , 'favorite.directive': 'app/directive/favorite.directive'
        , 'favorite-css': 'app/assets/style/favorite'
        , 'film-saved.factory': 'app/factory/film-saved.factory'
        , 'film-backdrop.factory': 'app/factory/film-backdrop.factory'
        , 'genre-saved.factory': 'app/factory/genre-saved.factory'
        , 'like.state': 'app/state/like.state'
        , 'like.controller': 'app/controller/like.controller'
        , 'no-results.directive': 'app/directive/no-results.directive'
        , 'no-results-css': 'app/assets/style/no-results'
        , 'not-like.state': 'app/state/not-like.state'
        , 'not-like.controller': 'app/controller/not-like.controller'
        , 'internal.state': 'app/state/internal.state'
        , 'film-detail.controller': 'app/controller/film/detail.controller'
        , 'film-detail-css': 'app/assets/style/film-detail'
        , 'film-detail.directive': 'app/directive/film-detail.directive'
        , 'film-rating.directive': 'app/directive/film-rating.directive'
    }
    , shim: {
          'modernizr': { exports: 'Modernizr' }
        , 'angular': {
            deps: [
                  'moment'
                , 'css!normalize-css'
            ]
            , exports: 'angular'
        }
        , 'angularAMD': {
            deps: [
                'angular'
            ]
            , exports: 'angularAMD'
        }
        , 'angular-aria': {
            deps: [
                'angularAMD'
            ]
        }
        , 'angular-animate': {
            deps: [
                'angularAMD'
            ]
        }
        , 'angular-cookies': {
            deps: [
                'angularAMD'
            ]
        }
        , 'angular-resource': {
            deps: [
                'angularAMD'
            ]
        }
        , 'angular-sanitize': {
            deps: [
                'angularAMD'
            ]
        }
        , 'angular-ui-router': {
            deps: [
                'angularAMD'
            ]
        }
        , 'ngStorage': {
            deps: [
                'angularAMD'
            ]
        }
        , 'angularMaterial': {
            deps: [
                  'angularAMD'
                , 'css!angularMaterialCss']
        }
        , 'app.module': {
            deps: [
                  'angularAMD'
                , 'angular-resource'
                , 'angular-cookies'
                , 'angular-aria'
                , 'angular-animate'
                , 'angular-sanitize'
                , 'angular-ui-router'
                , 'ngStorage'
                , 'angularMaterial'
            ]
        }
        , 'app.state': {
            deps: [
                'app.module'
            ]
        }
        , 'app.controller': {
            deps: [
                  'app.module'
                , 'app.state'
                , 'css!app-css'
            ]
        }
        , 'main.controller': {
            deps: [
                  'film.directive'
                , 'film-saved.factory'
                , 'genre-saved.factory'
                , 'css!main-css'
            ]
        }
        , 'tmdb.resource': {
            deps: [
                'tmdb.constant'
            ]
        }
        , 'film.directive': {
            deps: [
                  'tmdb.constant'
                , 'film-saved.factory'
                , 'film-detail.directive'
                , 'favorite.directive'
                , 'film-rating.directive'
                , 'css!film-css'
            ]
        }
        , 'favorite.directive': {
            deps: [
                'css!favorite-css'
            ]
        }
        , 'film-saved.factory': {
            deps: [
                  'film-backdrop.factory'
                , 'tmdb.constant'
            ]
        }
        , 'film-backdrop.factory': {
            deps: [
                'tmdb.constant'
            ]
        }
        , 'like.state': {
            deps: [
                'internal.state'
            ]
        }
        , 'like.controller': {
            deps: [
                  'film-saved.factory'
                , 'no-results.directive'
            ]
        }
        , 'no-results.directive': {
            deps: [
                'css!no-results-css'
            ]
        }
        , 'internal.state': {
            deps: [
                'app.module'
            ]
        }
        , 'not-like.state': {
            deps: [
                'internal.state'
            ]
        }
        , 'not-like.controller': {
            deps: [
                  'film-saved.factory'
                , 'no-results.directive'
            ]
        }
        , 'menu.directive': {
            deps: [
                'css!menu-css'
            ]
        }
        , 'film-detail.controller': {
            deps: [
                  'film-saved.factory'
                , 'film-detail.directive'
                , 'favorite.directive'
                , 'film-rating.directive'
                , 'css!film-detail-css'
            ]
        }
    }
});
