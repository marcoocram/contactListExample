// core/home/home.srv.js
//
//

(function() {
    'use strict';

    angular.module('baseapp.core.home')

    .factory('baseapp.core.home.homeService', homeService);

    homeService.$inject = ['$q', '$ionicPlatform', '$cordovaContacts'];

    function homeService($q, $ionicPlatform, $cordovaContacts) {
        var homeService = {};

        homeService.contacts = contacts;

        activate();

        return homeService;

        ///////////////////

        function activate() {
            
        }

        // lista de contactos
        function contacts() {
            var q = $q.defer();

            $ionicPlatform.ready(function() {
                if (window.cordova) {
                    var opts = {
                        multiple: true,
                        hasPhoneNumber: true,
                        desiredFields: ['name', 'phoneNumbers']    //return fields.
                    };

                    $cordovaContacts.find(opts).then(function(allContacts) { //omitting parameter to .find() causes all contacts to be returned
                        q.resolve(allContacts);
                    });
                } else {
                    q.reject();
                }
            });

            return q.promise;
        }
    }
})();
