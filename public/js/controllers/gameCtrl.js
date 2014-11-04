var app = angular.module('truth');

app.controller('gameCtrl', function($scope, gameService, $location){

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
			console.log(res);
			$location.path('/player/');
		});
		var gameId = $scope.group.name;
		gameService.saveGame(gameId);
	}

	$scope.addQuestion
	
})