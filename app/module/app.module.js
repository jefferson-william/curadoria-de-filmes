'use strict';

define([
      'angular',
    , 'angularAMD'
    , 'angular-aria'
    , 'angular-animate'
    , 'angular-cookies'
    , 'angular-resource'
    , 'angular-sanitize'
    , 'angular-ui-router'
    , 'ngStorage'
    , 'angularMaterial'
], function (ng) {
    var app = ng
        .module('app', [
              'ngMaterial'
            , 'ngResource'
            , 'ngSanitize'
            , 'ngCookies'
            , 'ngAnimate'
            , 'ngStorage'
            , 'ngAria'
            , 'ui.router'
        ]);

    return app;
});
