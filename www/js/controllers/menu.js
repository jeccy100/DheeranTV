var mod = angular.module('dheerantv.controllers.menu', []);

mod.controller('MenuCtrl', function($scope, $state, $compile,UserService,$ionicModal, $ionicFilterBar,MovieRetriever,YOUTUBE_PARAMS,getYoutubeVideos) {

	 $scope.items={};






$scope.rateApp=function()
{
var devicePlatform = device.platform;

    // Check which platform
    if (devicePlatform == "iOS") {
        window.open('https://itunes.apple.com/us/app/YOUR-APP-SLUG-HERE/id000000000?mt=8&uo=4','_system'); // or itms://
    } else if (devicePlatform == "Android") {
        window.open('market://details?id=com.dheerantv.tvapp','_system');
    } else if (devicePlatform == "BlackBerry"){
        window.open('http://appworld.blackberry.com/webstore/content/<applicationid>');
    }


}
      $scope.showFilterBar = function () {
      //$scope.movies={};
          filterBar = $ionicFilterBar.show({
            items: $scope.items,
            backdrop:true,
            update: function (filteredItems) {
               console.log(filteredItems);
                        YOUTUBE_PARAMS.q=filteredItems;
                        YOUTUBE_PARAMS.pageToken='';
                        getYoutubeVideos.getVideos(50).then(function(movieData) {


                                                                         $scope.items= movieData.data.items;
                                                                          var element1 = $compile('<ul class="list"><li class="item" ng-repeat="suggestion in items" index="{{ $index }}" val="{{ suggestion.snippet.title }}" ng-class="{ active: ($index === selectedIndex) }" ng-click="getSelectedVideo(suggestion.id.videoId)" ng-bind-html="suggestion.snippet.title"></li></ul></div>')( $scope);
                                                                      $('.autocomplete').html(element1);
                                                                      // $scope.$apply();
                                                                        });

            },
            filterProperties : 'snippet.title'
          });
        }

        $scope.GoToPrograms=function ()
        {
    $state.go('app.programs');


        }
        $scope.GoToHome=function ()
                {

     $state.go('app.home');

                }



                $ionicModal.fromTemplateUrl('templates/modal.html', {
                    scope: $scope
                  }).then(function(modal) {
                    $scope.modal = modal;
                  });



                $scope.getSelectedVideo=function(videoId)
                {

                angular.forEach($scope.items, function(video){

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

                  /*$scope.$apply(function () {
                  $scope.selectedVideo.id.videoId='';
                  });*/

                $scope.selectedVideo.id.videoId='';

                $scope.modal.hide();

                }




      $scope.doSomethingElse = function(suggestion){
        console.log("Suggestion selected: " + suggestion.snippet.title );

    $scope.selectedVideo=suggestion;
    console.log($scope.selectedVideo);
    $scope.modal.show();
      }

});