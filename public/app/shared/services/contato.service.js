(function() {
    'use strict';

    angular.module('app.contato')
        .factory('contatoService', contatoService);

    contatoService.$inject = ['$resource']

    function contatoService($resource) {
        var service = {
            // TODO change to methods - CRUD
            Contato: $resource('/contatos/:id')
        }

        return service;
    }

})();
