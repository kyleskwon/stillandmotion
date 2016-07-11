stillandmotion = angular.module('stillandmotion', ['ui.router']);

stillandmotion.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
    
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeCtrl',
            templateUrl: '/templates/home.html'
        })
        .state('philippines', {
            url: '/philippines',
            controller: 'PhilippinesCtrl',
            templateUrl: '/templates/philippines.html'
        })
        .state('malaysia', {
            url: '/malaysia',
            controller: 'MalaysiaCtrl',
            templateUrl: '/templates/malaysia.html'
        })
        .state('thailand', {
            url: '/thailand',
            controller: 'ThailandCtrl',
            templateUrl: '/templates/thailand.html'
        })
        .state('cambodia', {
            url: '/cambodia',
            controller: 'CambodiaCtrl',
            templateUrl: '/templates/cambodia.html'
        })
        .state('indonesia', {
            url: '/indonesia',
            controller: 'IndonesiaCtrl',
            templateUrl: '/templates/indonesia.html'
        });
}]);

stillandmotion.controller("HomeCtrl", function($scope) {
    
});

stillandmotion.controller("PhilippinesCtrl", function($scope) {
    
});

stillandmotion.controller("MalaysiaCtrl", function($scope) {
    
});

stillandmotion.controller("ThailandCtrl", function($scope) {
    
});

stillandmotion.controller("CambodiaCtrl", function($scope) {
    
});

stillandmotion.controller("IndonesiaCtrl", function($scope) {
    
});