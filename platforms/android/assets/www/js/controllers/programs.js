var mod = angular.module('dheerantv.controllers.programs', []);

mod.controller('ProgramsCtrl', function($scope, $state, $stateParams, $ionicListDelegate,YOUTUBE_PARAMS,getYoutubeVideos,loader,$ionicModal) {

$scope.redirectToProgram=function(param)
{
console.log('Iside redirectoprogram');
$state.go('app.program',{ name: param });

}
/*       $scope.videos = [];
        loader.show();
      getYoutubeVideos.getVideos(10).then(function(movieData) {


                                                      $scope.videos= movieData.data.items;
                                                      YOUTUBE_PARAMS.pageToken=movieData.data.nextPageToken;
                                                      YOUTUBE_PARAMS.q="";
      console.log($scope.videos);
      $scope.noMoreItemsAvailable = false;
      loader.hide();
                                                   });




$scope.noMoreItemsAvailable = true;

  $scope.loadMore = function() {

loader.show();
getYoutubeVideos.getVideos(10).then(function(movieData) {
  YOUTUBE_PARAMS.pageToken=movieData.data.nextPageToken;
  YOUTUBE_PARAMS.q="";
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


$scope.closeModal=function()
{

  //$scope.$apply(function () {
  //$scope.selectedVideo.id.videoId='';
  //});

$scope.selectedVideo.id.videoId='';

$scope.modal.hide();

}
*/

});