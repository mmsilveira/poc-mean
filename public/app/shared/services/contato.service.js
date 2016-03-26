angular.module('app.contato')
.factory('Contato', function($resource) {
    return $resource('/contatos/:id');
});
