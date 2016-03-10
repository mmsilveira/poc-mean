angular.module('contatooh')
.controller('LoginController',
function($http, $scope, $routeParams, $location, Login) {

    $scope.login = function() {
        $http.post('/login', {email: 'teste@teste.com', password: '123456'})
        .then(function(res) {
            $scope.email = res;
            $location.path('/contatos');
        })
        .catch(function(erro) {
            console.log(erro);
        });
    };

});
