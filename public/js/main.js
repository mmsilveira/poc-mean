angular.module('contatooh', ['ngRoute', 'ngResource', 'ngMaterial'])
.config(function($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push('meuInterceptor');
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
    })
    .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    });
})
.controller('MainController', ['$scope', function($scope) {
    $scope.toggleList = function() {
        console.log('oi');
    };
}]);
