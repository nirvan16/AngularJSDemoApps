var routing = angular.module('routing',['ui.router']);

routing.config (function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('demo3.html');

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
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        },
        templateUrl: 'app/views/thirdpage.html'
    })
});