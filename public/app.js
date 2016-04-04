angular.module('app', ['ui.router', 'ngResource', 'mdl', 'app.contato', 'app.login'])
    .config(['$httpProvider', '$urlRouterProvider', '$stateProvider', config])
    .run(function() {
        var mdlUpgradeDom = false;
        setInterval(function() {
            if (mdlUpgradeDom) {
                componentHandler.upgradeAllRegistered();
                mdlUpgradeDom = false;
            }
        }, 200);

        var observer = new MutationObserver(function() {
            mdlUpgradeDom = true;
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        /* support <= IE 10
        angular.element(document).bind('DOMNodeInserted', function(e) {
            mdlUpgradeDom = true;
        });
        */
    });

function config($httpProvider, $urlRouterProvider, $stateProvider) {

    // $httpProvider.interceptors.push('loginInterceptorService');
    $urlRouterProvider.otherwise('/contatos');

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
