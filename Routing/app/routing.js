var routing = angular.module('routing', ['ui.router']);

routing.config (function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('index.html');

    $stateProvider

    .state('first', {
        url: 'app/views',
        templateUrl: 'app/views/firstpage.html',	
    })

    .state('second', {
        url: 'app/views',
        templateUrl: 'app/views/secondpage.html'
    })

    .state('third',{
        url: 'app/views',
        controller: 'namesController',
        templateUrl: 'app/views/thirdpage.html'
    })
});