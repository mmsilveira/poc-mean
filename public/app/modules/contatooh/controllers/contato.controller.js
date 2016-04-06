(function () {
    'use strict';

    angular.module('app.contato')
    .controller('ContatoController', ContatoController);

    ContatoController.$inject = ['$state', '$stateParams', 'Contato'];

    function ContatoController($state, $stateParams, Contato) {
        var vm = this;

        if ($stateParams.contatoId) {
            Contato.get({id: $stateParams.contatoId},
                function(contato) {
                    vm.contato = contato;
                },
                function(erro) {
                    vm.mensagem = {
                        texto: 'Não foi possível obter o contato.'
                    };
                    console.log(erro);
                }
            );
        } else {
            vm.contato = new Contato();
        }

        vm.salva = function() {
            vm.contato.$save()
            .then(function() {
                vm.mesagem = {texto: 'Salvo com sucesso.'};
                vm.contato = new Contato();
                $state.go('contatos');
            })
            .catch(function(erro) {
                vm.mensagem = {texto: 'Não foi possível salvar.'};
            });
        };

        Contato.query(function(contatos) {
            vm.contatos = contatos;
        });
    }

})();
