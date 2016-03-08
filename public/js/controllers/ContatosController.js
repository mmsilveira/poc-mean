// js/controllers/ContatosController.js
angular.module('contatooh')
.controller('ContatosController', function($scope, Contato) {
    $scope.filtro = '';
    $scope.contatos = [];
    $scope.mensagem = {texto: ''};

    function buscaContatos() {
        Contato.query(
            function(contatos) {
                $scope.contatos = contatos;
            },
            function(erro) {
                console.log(erro);
                $scope.mesagem = {
                    texto: 'Não foi possivel obter a lista de contatos.'
                }
            }
        );
    }
    buscaContatos();

    $scope.remove = function(contato) {
        Contato.delete({id: contato._id},
            buscaContatos,
            function(erro) {
                console.log(erro);
                $scope.mesagem = {
                    texto: 'Não foi possivel remover o contato.'
                };
            }
        );
    }
});
