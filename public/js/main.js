// public/js/main.js
angular.module('contatooh', ['ngRoute', 'ngResource'])
.config(function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/contatos'});
    $routeProvider
    .when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
    })
    .when('/contato/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    })
    .when('/contato', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
    });
});
