(function() {
    'use strict';

    angular.module('app')
    .factory('loginInterceptorService', loginInterceptorService);

    // loginInterceptorService.$inject = ['$state'];

    function loginInterceptorService($state, $q) {
        var interceptor = {
            responseError: function(res) {
                if (res.status == 401) {
                    // $state.go('login');
                }
                return $q.reject(res);
            }
        };

        return interceptor;
    }

})();
