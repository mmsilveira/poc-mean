angular.module('app', ['ui.router', 'ngResource', 'ngMaterial', 'app.contato', 'app.login'])
    .config(['$httpProvider', '$urlRouterProvider', '$stateProvider', config]);

function config($httpProvider, $urlRouterProvider, $stateProvider) {

    // $httpProvider.interceptors.push('loginInterceptorService');
    // $urlRouterProvider.otherwise('/contatos');

    $stateProvider
        .state('template', {
            views: {
                'app-header': {
                    templateUrl: 'app/template/header/views/header.html',
                    controller: 'HeaderController as vm'
                },
                'app-sidebar': {
                    templateUrl: 'app/template/sidebar/views/sidebar.html',
                    controller: 'SidebarController as vm'
                },
                'app-body': {
                    templateUrl: 'app/template/content/views/content.html',
                    controller: 'ContentController as vm',
                    reloadOnSearch: false
                }
            }
        });

}
