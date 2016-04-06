(function() {
    'use strict';

    angular.module('app.login')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', '$state', '$location', 'Login'];

    function LoginController($http, $state, $location, Login) {
        var vm = this;

        vm.model = {
            email: "",
            password: ""
        };

        vm.toggleList = function() {
            console.log('oi');
        };

        vm.login = function() {
            $http.post('/login', vm.model)
            .then(function(res) {
                // vm.email = res;
                $location.path('/contatos');
            })
            .catch(function(erro) {
                console.log(erro);
            });
        };

        vm.signup = function() {
            $http.post('/signup', vm.model)
            .then(function(res) {
                // vm.email = res;
                $location.path('/contatos');
            })
            .catch(function(erro) {
                console.log(erro);
            });
        };

    }

})();
