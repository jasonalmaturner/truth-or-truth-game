var app = angular.module('truth');

app.controller('mainCtrl', function($scope, playerService, $location){

	$scope.getUser = function(){
		playerService.getUser().then(function(user){
			$scope.user = user.data;
			console.log(user);
		});
	}

	$scope.getUser();

})