angular.module('contatooh')
.controller('LoginController',
function($http, $scope, $routeParams, $location, Login) {

    $scope.model = {
        email: "",
        password: ""
    };

    $scope.toggleList = function() {
        console.log('oi');
    };

    $scope.login = function() {
        $http.post('/login', $scope.model)
        .then(function(res) {
            $scope.email = res;
            $location.path('/contatos');
        })
        .catch(function(erro) {
            console.log(erro);
        });
    };

});
