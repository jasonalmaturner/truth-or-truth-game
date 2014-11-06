var app = angular.module('truth');

app.controller('gameCtrl', function($scope, $rootScope, gameService, $location){

	$scope.join = true;
	$scope.create = false;
	$scope.joinToggle = function(){
		$scope.join = true;
		$scope.create = false;
		console.log('test');
	}

	$scope.createToggle = function(){
		$scope.join = false;
		$scope.create = true;
		console.log('test');
	}

	$scope.createGroup = function(){
		gameService.createNewGroup($scope.group).then(function(res){
			$location.path('/player/');
			var gameId = {ref: res.data._id, hat: true };
			gameService.saveGame(gameId, $scope.user._id).then(function(res){
				console.log(res);
				$rootScope.$broadcast('update-user');
			});
		});
	}

	$scope.getGames = function(){
		gameService.getGames().then(function(games){
			$scope.games = games.data;
			console.log($scope.games);
		})
	}

	$scope.getGames();

	// $scope.addQuestion = function(){
	// 	gameService.
	// }
	
})