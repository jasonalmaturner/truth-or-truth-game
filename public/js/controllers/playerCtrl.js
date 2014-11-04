var app = angular.module('truth');

app.controller('playerCtrl', function($scope, playerService){

	$scope.question = function(){
		playerService.sendQuestion($scope.submit);
		$scope.submit = '';
	}

})