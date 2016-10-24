// app/core/app.mdl.js
//
//

(function() {
    'use strict';

    angular.module('baseapp', ['ionic',
                               'ngCordova',

                               'validation.match', // Coincidencias de campos (para confirmaciones)

                               'LocalForageModule', // Offline storage

                               'ngTouch', // touch

                               'baseapp.templates', // La caché del html

                               'baseapp.core.config',
                               'baseapp.core.routes',
                               'baseapp.core.languages',

                               'baseapp.core.home',

                               'baseapp.common.directives',
                               'baseapp.common.services'])

    .config(['$ionicConfigProvider',
            function($ionicConfigProvider) {
                $ionicConfigProvider.scrolling.jsScrolling(false); // false: scrolling nativo

                // Global (default)
            }]
    );
})();