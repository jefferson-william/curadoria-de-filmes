'use strict';

requirejs([
      'angular'
    , 'angularAMD'
    , 'app.module'
    , 'moment'
    , 'modernizr'
    , 'app.state'
    , 'like.state'
    , 'not-like.state'
], function (
      ng
    , amd
    , app
    , moment
    , Modernizr
) {
    app
      .constant('DEFAULT_DATE_FORMAT', 'DD/MM/YYYY')
      .factory('moment', function () { return moment; })
      .run(Run)
      .config(Config)
      ;

    var bootstrap = amd.bootstrap(app);

    Config.$inject = [
          '$provide'
        , '$locationProvider'
        , '$sceProvider'
        , '$mdDateLocaleProvider'
        , '$mdThemingProvider'
        , '$urlRouterProvider'
        , 'DEFAULT_DATE_FORMAT'
        , '$localStorageProvider'
    ];

    function Config (
          $provide
        , $locationProvider
        , $sceProvider
        , $mdDateLocaleProvider
        , $mdThemingProvider
        , $urlRouterProvider
        , DEFAULT_DATE_FORMAT
        , $localStorageProvider
    ) {
        $localStorageProvider.setKeyPrefix('vivareal');

        $sceProvider
            .enabled(false);

        $locationProvider
            .html5Mode(false)
            .hashPrefix('');

        $urlRouterProvider.otherwise('/');

        $mdThemingProvider
            .definePalette('vivadecora', {
                  '50': 'ffebee'
                , '100': 'ffcdd2'
                , '200': 'ef9a9a'
                , '300': 'e57373'
                , '400': 'ff5656'
                , '500': 'ff1c1c'
                , '600': 'e53935'
                , '700': 'd32f2f'
                , '800': 'c62828'
                , '900': 'b71c1c'
                , 'A100': 'ff8a80'
                , 'A200': 'ff5252'
                , 'A400': 'ff1744'
                , 'A700': 'd50000'
                , 'contrastDefaultColor': 'light'
                , 'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100']
                , 'contrastLightColors': undefined
            });

        $mdThemingProvider
            .theme('default')
            .primaryPalette('vivadecora')
            .accentPalette('orange', {
                'default': '500'
            })
            .warnPalette('amber', {
                'default': '500'
            });

        $mdDateLocaleProvider.formatDate = function (date) {
            var date = date ? moment(date, 'YYYY/MM/DD').format(DEFAULT_DATE_FORMAT) : '';

            return date;
        };

        $mdDateLocaleProvider.parseDate = function (dateString) {
            var m = moment(dateString, DEFAULT_DATE_FORMAT, true);

            return m.isValid() ? m.toDate() : new Date(NaN);
        };
    }

    Run.$inject = [
          '$rootScope'
        , '$templateCache'
    ];

    function Run(
          $rootScope
        , $templateCache
    ) {
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            var $body = angular.element(document.body);

            $body.removeClass('hide');

            toState.name && $body.removeClass('page-' + fromState.name.replace(/[.]/g, ' page-')).addClass('page-' + toState.name.replace(/[.]/g, ' page-'));

            if (toState.data) {
                $rootScope.pageTitle = toState.data.pageTitle;
            }
        });

        location.host === 'localhost:9001' && $rootScope.$on('$viewContentLoaded', function () {
            $templateCache.removeAll();
        });
    }
});
