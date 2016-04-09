(function() {
    'use strict';

    angular.module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', '$state', '$location', 'loginService', 'SweetAlert'];

    function LoginController($http, $state, $location, loginService, SweetAlert) {
        var vm = this;

        vm.model = {
            email: "",
            password: "",
            confirmPassword: ""
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
            if (vm.model.password === vm.model.confirmPassword) {
                $http.post('/signup', vm.model)
                    .then(function(res) {
                        // vm.email = res;
                        $location.path('/contatos');
                    })
                    .catch(function(erro) {
                        console.log(erro);
                    });
            } else {
                SweetAlert.swal({
                    title: 'Opss!',
                    text: 'Confirmação do password não confere.',
                    type: 'error',
                    confirmButtonText: 'Entendi',
                    closeOnConfirm: true
                });
            }
        };

    }

})();
