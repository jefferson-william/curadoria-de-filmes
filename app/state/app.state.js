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
                }
                , resolve: {
                    dependencies: ['$q', function ($q) {
                        var deferred;

                        deferred = $q.defer();

                        require([
                              'angularAMD'
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
            ;

        $qProvider.errorOnUnhandledRejections(false);
    }

    return State;
});
