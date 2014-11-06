var app = angular.module('truth');

app.service('gameService', function($http, $q){

	this.createNewGroup = function(group){
		return $http({
			method: "POST",
			url: '/api/create',
			data: group
		})
	}

	this.saveGame = function(gameId, userId){
		return $http({
			method: "PUT",
			url: '/api/player/' + userId,
			data: gameId
		})
	}

	this.getGames = function(){
		return $http({
			method: "GET",
			url: '/api/game'
		})
	}

})