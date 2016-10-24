// app/core/routes/routes.mdl.js
//
//

(function() {
    'use strict';

    angular.module('baseapp.core.routes', [])

    .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routesConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
        
        .state('home', {
            url: '/home',
            requireLogin: false,
            cache: true,
            templateUrl : 'app/core/home/home.tpl.html',
            controller  : 'baseapp.core.home.homeCtrl as vm'
        })

        // defecto
        $urlRouterProvider.otherwise('/home');
    }
})();
