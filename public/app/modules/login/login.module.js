(function() {
    'use strict';

    angular.module('app.login', [])
    .constant('LOGIN_PATH', {
        'DIR': 'app/modules/login/views/'
    })
    .config(['LOGIN_PATH', '$stateProvider', config]);

    function config(LOGIN_PATH, $stateProvider) {
        $stateProvider
        .state('login', {
            url: '/login',
            views: {
                'app-body': {
                    templateUrl: LOGIN_PATH.DIR + 'login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            }
        });
    }

})();
