// app/core/languages/languages.es_ES.js
//
//

(function() {
    'use strict';

    angular.module('baseapp.core.languages')

    .config(languagesConfig);

    languagesConfig.$inject = ['$translateProvider'];

    function languagesConfig($translateProvider) {
        $translateProvider.translations('es_ES', {
            'EMAIL': 'Email',
            
            'ERR_DESCONOCIDO': 'Se ha producido un error desconocido',
            'ERR_LOGIN': 'Email y/o contraseña no válidos',

            'INICIANDO_SESION': 'Iniciando sesión',
            'PASSWORD': 'Contraseña',
        });
    }
})();