angular.module('app.login')
.factory('Login', function($resource) {
    return $resource('/login');
});
