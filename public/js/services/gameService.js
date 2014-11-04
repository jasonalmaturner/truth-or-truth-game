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

	// this.createNewGroup = function(group){
	// 	// Need to add function that will prevent users from creating
	// 	// a new group with the same name as an existing group
	// 	var newGroup = {};
	// 	newGroup.name = group.name;
	// 	newGroup.password = group.password;
	// 	newGroup.hatPassword = group.hatPassword;
	// 	firebaseCreate.child('groups').child(newGroup.name).set(newGroup);
	// }

})