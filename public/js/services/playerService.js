var app = angular.module('truth');

app.service('playerService', function($http, $q){

	this.sendQuestion = function(info, gameId){
		return $http({
			method: "PUT",
			url: '/api/game/' + gameId + '/question',
			data: info
		})
	}

	this.getUser = function(){
		return $http({
			method: "GET",
			url: '/api/player'
		})
	}

})