// app/core/app.mdl.js
//
//

(function() {
	'use strict';

	angular.module('baseapp')

	.run(baseappRun);

    baseappRun.$inject = ['$ionicPlatform', 'baseapp.core.config.CONFIG'];

    function baseappRun($ionicPlatform, CONFIG) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                window.cordova.plugins.Keyboard.disableScroll(true);
            }
        });
    }
})();