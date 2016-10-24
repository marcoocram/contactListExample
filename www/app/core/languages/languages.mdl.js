// app/core/languages/languages.mdl.js
//
//

(function() {
	'use strict';

	angular.module('baseapp.core.languages', ['pascalprecht.translate'])

	.config(languagesConfig);

	languagesConfig.$inject = ['$translateProvider'];

	function languagesConfig($translateProvider) {
	    $translateProvider.preferredLanguage('es_ES');
	}
})();