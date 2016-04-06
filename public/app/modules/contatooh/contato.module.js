(function() {
    'use strict';

    angular.module('app.contato', [])
    .constant('CONTATOOH_PATH', {
        'DIR': 'app/modules/contatooh/views/'
    })
    .config(['CONTATOOH_PATH', '$stateProvider', config]);

    function config(CONTATOOH_PATH, $stateProvider) {
        $stateProvider
        .state('contatos', {
            url: '/contatos',
            views: {
                'app-content': {
                    templateUrl: CONTATOOH_PATH.DIR + 'contatos.html',
                    controller: 'ContatosController',
                    controllerAs: 'vm'
                }
            },
            parent: 'template-app'
        })
        .state('contatos.new', {
            url: '/contato',
            views: {
                'app-content': {
                    templateUrl: CONTATOOH_PATH.DIR + 'contato.html',
                    controller: 'ContatoController',
                    controllerAs: 'vm'
                }
            },
            parent: 'template-app'
        })
        .state('contatos.edit', {
            url: '/contato/:contatoId',
            views: {
                'app-content': {
                    templateUrl: CONTATOOH_PATH.DIR + 'contato.html',
                    controller: 'ContatoController',
                    controllerAs: 'vm'
                }
            },
            parent: 'template-app'
        });
    }

})();
