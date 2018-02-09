'use strict';

requirejs.config({
      urlArgs: null
    , waitSeconds: 0
    , paths: {
          'require': 'bower_components/requirejs/require'
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
        , 'footer.controller': 'app/controller/footer.controller'
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
        , 'header.controller': {
            deps: [
                'app.module'
            ]
        }
        , 'main.controller': {
            deps: [
                'app.module'
            ]
        }
        , 'footer.controller': {
            deps: [
              'app.module'
            ]
        }
    }
});
