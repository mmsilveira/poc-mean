angular.module('contatooh')
.factory('Login', function($resource) {
    return $resource('/login');
});
