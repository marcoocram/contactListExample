// core/home/home.ctrl.js
//
//

(function() {
	'use strict';

	angular.module('baseapp.core.home')

    .controller('baseapp.core.home.homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$ionicLoading', 'baseapp.core.home.homeService'];

    function homeCtrl($ionicLoading, homeService) {
    	/* jshint validthis: true */
        var vm = this;

        activate(); // construct

        ///////////////////

        function activate() {
            $ionicLoading.show({
                template: 'Cargando contactos...'
            });
            homeService.contacts().then(function(contacts) {
                $ionicLoading.hide();
                vm.contacts = contacts;
            });
        }
    }
})();