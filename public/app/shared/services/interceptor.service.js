(function() {
    'use strict';

    angular.module('app')
    .factory('loginInterceptorService', loginInterceptorService);

    loginInterceptorService.$inject = ['$location', '$q'];

    function loginInterceptorService($location, $q) {
        var interceptor = {
            responseError: function(res) {
                if (res.status == 401) {
                    $location.path('/login');
                }
                return $q.reject(res);
            }
        };

        return interceptor;
    }

})();
