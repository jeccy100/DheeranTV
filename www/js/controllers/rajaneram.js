var mod = angular.module('dheerantv.controllers.rajaneram', []);

mod.controller('RajaneramCtrl', function($scope, $state, $stateParams, $ionicListDelegate, ShowsService, UserService,$http) {

	$scope.search = {
		'name':''
	};


$scope.playerVars = {
  rel: 0,
  showinfo: 0,
  modestbranding: 0,
}

  $scope.videos = [];

    $scope.youtubeParams = {
      key: 'AIzaSyAiysYLd0qeMYQPYw2vPDW00usrFXH3gDw',
      type: 'video',
      maxResults: '5',
      part: 'id,snippet',
      q: 'rajaneram',
      order: 'date',
      channelId: 'UCikYeWfQdfPRgaH7PktVvhA',
    }

    $http.get('https://www.googleapis.com/youtube/v3/search', {params:$scope.youtubeParams}).success(function(response){
      angular.forEach(response.items, function(child){
        console.log (child);
        $scope.videos.push(child);
      });
    });


	$scope.showService = ShowsService;
	$scope.user = UserService;
});