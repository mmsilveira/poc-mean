(function() {
    'use strict';

    angular.module('app.contato')
        .factory('contatoService', contatoService);

    contatoService.$inject = ['$resource'];

    function contatoService($resource) {
        var service = {
            Contato: $resource('/contatos/:id')
        };

        return service;
    }

})();
