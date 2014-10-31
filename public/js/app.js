'use strict';

var app = angular.module('truth', ['ngRoute']);

app.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/templates/home.html'
		})
		.when('/login', {
			templateUrl: '/templates/login.html',
			controller: 'loginCtrl'
		})
})

app.config(function($httpProvider) {
  $httpProvider.interceptors.push(function($q, $location) {
    return {
      'responseError': function(rejection) {
        if (rejection.status === 401) {
          $location.path('/login');
        }
        return $q.reject(rejection);
      }
    }
  })
})