var mod = angular.module('dheerantv.controllers.search', []);

mod.controller('HomeCtrl', function($scope, $state, $stateParams, $ionicListDelegate, ShowsService, UserService,$http) {

	$scope.search = {
		'name':''
	};

	                $scope.playerInstance = jwplayer("player");

                                $scope.playerInstance.setup({
                                    playlist:[{
                                       file:"http://edgecastdheerantv.purplestream.in/dheeranorg/ngrp:dheeran_all/playlist.m3u8",
                                       mediaid:"NSQqrS3P"
                                    }],
                                    width:"100%",
                                    aspectratio:"4:3",
                                    autostart: true,
                                    androidhls: true,
                                    primary: 'html5'
                                });



$scope.playerVars = {
  rel: 0,
  showinfo: 0,
  modestbranding: 0,
}

  $scope.videos = [];

    $scope.youtubeParams = {
      key: 'AIzaSyAiysYLd0qeMYQPYw2vPDW00usrFXH3gDw',
      type: 'video',
      maxResults: '10',
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