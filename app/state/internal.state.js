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
            .state('internal', {
                parent: 'app'
            })
            ;

        $qProvider.errorOnUnhandledRejections(false);
    }

    return State;
});
