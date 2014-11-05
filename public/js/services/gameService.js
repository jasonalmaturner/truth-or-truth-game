var app = angular.module('truth');

app.service('gameService', function($http, $q){

	this.createNewGroup = function(group){
		return $http({
			method: "POST",
			url: '/create',
			data: group
		})
	}

	this.saveGame = function(gameId, userId){
		return $http({
			method: "PUT",
			url: '/player/' + userId,
			data: gameId
		})
	}

})