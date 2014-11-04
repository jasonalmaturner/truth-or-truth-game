var app = angular.module('truth');

app.service('playerService', function($http, $q){

	this.sendQuestion = function(info){
		return $http({
			method: "POST",
			url: '/player',
			data: info
		})
	}

	this.getUser = function(){
		return $http({
			method: "GET",
			url: '/player'
		})
	}

})