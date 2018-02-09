'use strict';

requirejs.config({
      urlArgs: null
    , waitSeconds: 0
    , paths: {
          'require': 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min'
        , 'css-builder': '/bower_components/require-css/css-builder'
        , 'normalize': '/bower_components/require-css/normalize'
        , 'modernizr': 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min'
        , 'css': 'https://cdnjs.cloudflare.com/ajax/libs/require-css/0.1.10/css.min'
        , 'moment': 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min'
        , 'angular': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.min'
        , 'angularAMD': 'http://cdn.jsdelivr.net/angular.amd/0.1.0/angularAMD.min'
        , 'angular-animate': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-animate.min'
        , 'angular-aria': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-aria.min'
        , 'angular-cookies': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-cookies.min'
        , 'angular-resource': 'https://cdnjs.cloudflare.com/ajax/libs/angular-resource/1.6.9/angular-resource.min'
        , 'angular-sanitize': 'https://cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.6.9/angular-sanitize.min'
        , 'angular-ui-router': 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/1.0.3/angular-ui-router.min'
        , 'ngStorage': 'https://cdnjs.cloudflare.com/ajax/libs/angular-storage/0.0.15/angular-storage.min'
        , 'angularMaterial': 'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.7/angular-material.min'
        , 'angularMaterialCss': 'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.7/angular-material.min'
        , 'app.module': 'app/module/app.module'
        , 'app-css': 'app/assets/style/app'
        , 'app.state': 'app/state/app.state'
        , 'app.controller': 'app/controller/app.controller'
    }
    , shim: {
          'modernizr': { exports: 'Modernizr' }
        , 'angular': {
            deps: [
                'moment'
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
                , 'css!app-css'
            ]
        , }
        , 'app.state': {
            deps: [
                'app.module'
            ]
        }
        , 'app.controller': {
            deps: [
                  'app.module'
                , 'app.state'
            ]
        }
    }
});
