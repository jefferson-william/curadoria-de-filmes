'use strict';

requirejs.config({
      urlArgs: null
    , waitSeconds: 0
    , paths: {
          'require': 'bower_components/requirejs/require'
        , 'normalize-css': 'bower_components/normalize.css/normalize'
        , 'css-builder': 'bower_components/require-css/css-builder'
        , 'normalize': 'bower_components/require-css/normalize'
        , 'modernizr': 'bower_components/components-modernizr/modernizr'
        , 'css': 'bower_components/require-css/css'
        , 'moment': 'bower_components/moment/moment'
        , 'angular': 'bower_components/angular/angular'
        , 'angularAMD': 'bower_components/angularAMD/dist/angularAMD'
        , 'angular-animate': 'bower_components/angular-animate/angular-animate'
        , 'angular-aria': 'bower_components/angular-aria/angular-aria'
        , 'angular-cookies': 'bower_components/angular-cookies/angular-cookies'
        , 'angular-resource': 'bower_components/angular-resource/angular-resource'
        , 'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize'
        , 'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router'
        , 'ngStorage': 'bower_components/ngstorage/ngStorage'
        , 'angularMaterial': 'bower_components/angular-material/angular-material'
        , 'angularMaterialCss': 'app/assets/style/material'
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
                'tmdb.resource'
              , 'film.directive'
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
                , 'favorite.directive'
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
        , 'no-like.state': {
            deps: [
                'internal.state'
            ]
        }
        , 'no-like.controller': {
            deps: [
                  'film-saved.factory'
                , 'no-results.directive'
            ]
        }
    }
});
