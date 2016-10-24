// services/interceptorService.js
//
// Este servicio nos sirve para saber cuando falla una petición al servidor
// o una respuesta desde el mismo, también para enviar el token de autorización con cada petición

angular.module('baseapp.common.services')

.factory('baseapp.common.services.netInterceptorService',
         ['$q', '$injector',
         function ($q, $injector) {
            var err_connection = false;

            return {
                request: function(config) {
                    return config;
                },
                requestError: function(rejection) {
                    return $q.reject(rejection);
                },
                responseError: function(rejection) {
                    var $location     = $injector.get("$location");
                    var auth          = $injector.get("baseapp.core.login.loginService");

                    var $ionicHistory = $injector.get("$ionicHistory");
                    var $ionicLoading = $injector.get("$ionicLoading");
                    var $ionicPopup   = $injector.get("$ionicPopup");
                    var $translate    = $injector.get("$translate");

                    switch(rejection.status) {

                        case 401: //No autorizado
                            // Borrar token
                            break;

                        case 404: //No encontrado
                            break;

                        default:
                            break;
                    }

                    return $q.reject(rejection);
                }
            };
        }
])

.config(['$httpProvider' , function($httpProvider){
    $httpProvider.interceptors.push('baseapp.common.services.netInterceptorService');
}]);
