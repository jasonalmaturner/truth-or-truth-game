'use strict';

var app = angular.module('truth', ['ngRoute']);

app.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/'
		})
})