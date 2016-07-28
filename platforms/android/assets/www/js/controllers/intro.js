var mod = angular.module('dheerantv.controllers.intro', []);

mod.controller('IntroCtrl', function ($scope, $state, UserService) {

	//$scope.loggingIn = false;
 $state.go('app.home');
	/*$scope.login = function () {
		if (!$scope.loggingIn) {
			$scope.loggingIn = true;
			UserService.loginUser().then(function () {
					$scope.loggingIn = false;
			    $state.go('app.search');
		   });
		}
	}*/
});
