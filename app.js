angular.module('instructure', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url: '/',
        controller: 'landingCtrl',
        templateUrl: 'views/landing.html'
      })



})
