var mod = angular.module('dheerantv.controllers.rajaneram', []);

mod.controller('RajaneramCtrl', function($scope, $state, $stateParams, $ionicListDelegate,YOUTUBE_PARAMS,getYoutubeVideos,loader) {


       $scope.videos = [];
        loader.show();
      getYoutubeVideos.getVideos(10).then(function(movieData) {


                                                      $scope.videos= movieData.data.items;
                                                      YOUTUBE_PARAMS.pageToken=movieData.data.nextPageToken
      console.log($scope.videos);
      $scope.noMoreItemsAvailable = false;
      loader.hide();
                                                   });




$scope.noMoreItemsAvailable = true;

  $scope.loadMore = function() {

loader.show();
getYoutubeVideos.getVideos(10).then(function(movieData) {
  YOUTUBE_PARAMS.pageToken=movieData.data.nextPageToken
angular.forEach(movieData.data.items, function(child){

        $scope.videos.push(child);


      });



                                    if ( movieData.data.items.length <1 ) {
                                        $scope.noMoreItemsAvailable = true;
                                        YOUTUBE_PARAMS.pageToken='';
                                      }


                                      $scope.$broadcast('scroll.infiniteScrollComplete');
                                      loader.hide();
                                             });



  };



});