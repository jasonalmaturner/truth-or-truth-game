var app = angular.module('truth');

app.controller('mainCtrl', function($scope, playerService, $location){

	$scope.getUser = function(){
		playerService.getUser().then(function(user){
			$scope.user = user.data;
			console.log($scope.user);
		});
	}

	$scope.getUser();
	$scope.$on('update-user', function(){
		$scope.getUser();
	})

})