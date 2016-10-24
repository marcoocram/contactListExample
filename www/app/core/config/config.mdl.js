// core/config/config.mdl.js
//
//

(function() {
    'use strict';

    angular.module('baseapp.core.config', [])

    .constant('baseapp.core.config.CONFIG', (function() {
        var server_protocol = 'http://';
        var server_host     = '';
        var server_folder   = '/api/';
        var server_port     = '80';

        return {
            'SERVER': {
                'PROTOCOL'  : server_protocol,
                'HOST'      : server_host,
                'PORT'      : server_port,
                'FOLDER'    : server_folder,
                
                'URL'       : server_protocol + server_host + ':' + server_port + server_folder
            },
            'PUSHNOTIFICATIONS' : {
            },
            'DB' : {
                'NAME'     : 'baseapp.db',
                'LOCATION' : 'default'
            }
        };
    })());
})();