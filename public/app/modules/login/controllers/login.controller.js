(function() {
    'use strict';

    angular.module('app.login')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', '$scope', '$location', 'Login'];

    function LoginController($http, $scope, $location, Login) {

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
                // $location.path('/contatos');
            })
            .catch(function(erro) {
                console.log(erro);
            });
        };

    }

})();
