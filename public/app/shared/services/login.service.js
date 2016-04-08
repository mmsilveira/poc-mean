(function() {
    'use strict';

    angular.module('app.login')
        .factory('loginService', loginService);

    loginService.$inject = ['$resource']

    function loginService($resource) {
        return $resource('/login');
    }

})();
