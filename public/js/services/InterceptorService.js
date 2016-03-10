angular.module('contatooh')
.factory('meuInterceptor',
function($location, $q) {
    var interceptor = {
        responseError: function(res) {
            if (res.status == 401) {
                $location.path('/login');
            }
            return $q.reject(res);
        }
    };

    return interceptor;
});
