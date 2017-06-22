var helloWorld = angular.module('helloWorld',[]);

helloWorld.controller('helloWorldController',function ($scope){
    $scope.message = "Hello World!"
});