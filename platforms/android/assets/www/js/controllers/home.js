var mod = angular.module('dheerantv.controllers.search', []);

mod.controller('HomeCtrl', function($scope, $state, $stateParams, $ionicListDelegate,$ionicFilterBar,loader, MovieRetriever) {

loader.show();
$scope.videos = [];
$scope.noMoreItemsAvailable = true;

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


                                  loader.hide();





});