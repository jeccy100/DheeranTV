var mod = angular.module('dheerantv.controllers.program', []);

mod.controller('ProgramCtrl', function($scope, $state, $stateParams, $ionicListDelegate,YOUTUBE_PARAMS,getYoutubeVideos,loader,$ionicModal,youtubeEmbedUtils) {

$scope.dheeranPlayer = {};
       $scope.videos = [];
        $scope.title =$stateParams.name;
        loader.show();
        YOUTUBE_PARAMS.q=$stateParams.name;
      getYoutubeVideos.getVideos(10).then(function(movieData) {


                                                      $scope.videos= movieData.data.items;
                                                     // YOUTUBE_PARAMS.pageToken=movieData.data.nextPageToken;
                                                      YOUTUBE_PARAMS.pageToken='';

      console.log($scope.videos);
      $scope.noMoreItemsAvailable = false;
      loader.hide();
                                                   });




$scope.noMoreItemsAvailable = true;

  $scope.loadMore = function() {

loader.show();
getYoutubeVideos.getVideos(10).then(function(movieData) {
  YOUTUBE_PARAMS.pageToken=movieData.data.nextPageToken;
  //YOUTUBE_PARAMS.q=$stateParams.name;
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




$ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });



$scope.getSetVideo=function(videoId)
{

angular.forEach($scope.videos, function(video){

if(video.id.videoId==videoId)
{
$scope.selectedVideo=video;
console.log($scope.selectedVideo);
$scope.modal.show();

}
});
}

$scope.playerTest=0;
$scope.closeModal=function()
{
 $scope.$broadcast( "stop", 1 );
//$scope.playerTest=1;
//document.getElementById("programCard").innerHTML = "";
//$scope.dheeranPlayer.invoke();
//console.log($scope.dheeranPlayer);
//$scope.dheeranPlayer.stopVideo();
  /*$scope.$apply(function () {
  $scope.selectedVideo.id.videoId='';
  });*/

//$scope.selectedVideo.id.videoId='';

$scope.modal.hide();

}


});