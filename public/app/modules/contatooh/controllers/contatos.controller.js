(function() {
    'use strict';

    angular.module('app.contato')
    .controller('ContatosController', ContatosController);

    ContatosController.$inject = ['$state', 'contatoService'];

    function ContatosController($state, contatoService) {
        var vm = this;

        vm.filtro = '';
        vm.contatos = [];
        vm.mensagem = {texto: ''};

        function buscaContatos() {
            contatoService.Contato.query(
                function(contatos) {
                    vm.contatos = contatos;
                },
                function(erro) {
                    console.log(erro);
                    vm.mesagem = {
                        texto: 'Não foi possivel obter a lista de contatos.'
                    };
                }
            );
        }
        buscaContatos();

        vm.remove = function(contato) {
            contatoService.Contato.delete({id: contato._id},
                buscaContatos,
                function(erro) {
                    console.log(erro);
                    vm.mesagem = {
                        texto: 'Não foi possivel remover o contato.'
                    };
                }
            );
        };
    }

})();
