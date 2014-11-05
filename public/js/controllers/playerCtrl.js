var app = angular.module('truth');

app.controller('playerCtrl', function($scope, playerService){

	$scope.sendQuestion = function(){
		playerService.sendQuestion($scope.submit, $scope.user.game.ref._id).then(function(res){
			console.log(res);
			$rootScope.$broadcast('update-user');
		});
		$scope.submit = '';
	}

})