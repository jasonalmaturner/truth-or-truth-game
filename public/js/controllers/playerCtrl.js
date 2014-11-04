var app = angular.module('truth');

app.controller('playerCtrl', function($scope, playerService){

	$scope.sendQuestion = function(){
		playerService.sendQuestion($scope.submit);
		$scope.submit = '';
	}

})