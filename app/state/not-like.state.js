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
            .state('internal.not-like', {
                  url: 'not-like'
                , views: {
                    'main@app': {
                          templateUrl: 'app/partial/like/index.html'
                        , controller: 'NotLikeController'
                        , controllerAs: 'Like'
                    }
                }
                , resolve: {
                    dependencies: ['$q', function ($q) {
                        var deferred;

                        deferred = $q.defer();

                        require([
                              'angularAMD'
                            , 'not-like.controller'
                        ], function (amd) {
                            amd.processQueue();

                            deferred.resolve();
                        });

                        return deferred.promise;
                    }
                ]}
            })
            ;

        $qProvider.errorOnUnhandledRejections(false);
    }

    return State;
});
