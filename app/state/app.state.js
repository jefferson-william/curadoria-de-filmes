'use strict';

define([
      'angular'
    , 'app.module'
], function (
      ng
    , app
) {
    ng.module('app').config(State);

    State.$inject = [
          '$stateProvider'
        , '$qProvider'
    ];

    function State (
          $stateProvider
        , $qProvider
    ) {
        $stateProvider
            .state('app', {
                  url: '/'
                , views: {
                    '': {
                          templateUrl: 'app/partial/layout/app.html'
                        , controller: 'AppController'
                        , controllerAs: 'App'
                    }
                    , 'header@app': {
                          templateUrl: 'app/partial/layout/header.html'
                        , controller: 'HeaderController'
                        , controllerAs: 'Header'
                    }
                    , 'main@app': {
                          templateUrl: 'app/partial/layout/main.html'
                        , controller: 'MainController'
                        , controllerAs: 'Main'
                    }
                    , 'footer@app': {
                          templateUrl: 'app/partial/layout/footer.html'
                        , controller: 'FooterController'
                        , controllerAs: 'Footer'
                    }
                }
                , resolve: {
                    dependencies: ['$q', function ($q) {
                        var deferred;

                        deferred = $q.defer();

                        require([
                              'angularAMD'
                            , 'app.controller'
                            , 'header.controller'
                            , 'main.controller'
                            , 'footer.controller'
                            , 'menu.directive'
                        ], function (amd) {
                            amd.processQueue();

                            deferred.resolve();
                        });

                        return deferred.promise;
                    }
                ]}
                , onEnter: [function () {
                    ng.element(document.body).addClass('page');
                }]
            })
            .state('film-detail', {
                  url: 'film/:id'
                , parent: 'app'
                , resolve: {
                    dependencies: ['$q', function ($q) {
                        var deferred;

                        deferred = $q.defer();

                        require([
                              'angularAMD'
                            , 'film-detail.controller'
                        ], function (amd) {
                            amd.processQueue();

                            deferred.resolve();
                        });

                        return deferred.promise;
                    }
                ]}
                , onEnter: ['$mdDialog', function ($mdDialog) {
                    $mdDialog.show({
                          clickOutsideToClose: false
                        , parent: angular.element(document.querySelectorAll('main'))
                        , controller: 'FilmDetailController'
                        , controllerAs: 'FilmDetail'
                        , templateUrl: 'app/partial/film/detail.html'
                        , fullscreen: false
                    });
                }]
                , onExit: ['$state', '$mdDialog', function ($state, $mdDialog) {
                    $mdDialog.hide();
                }]
            })
            ;

        $qProvider.errorOnUnhandledRejections(false);
    }

    return State;
});
