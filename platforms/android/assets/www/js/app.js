var app = angular.module('dheerantv', [
	'ionic',
	'ngCordova',
	'firebase',
	'angular-moment',
	'dheerantv.controllers',
	'dheerantv.services',
	'dheerantv.filters',
	'dheerantv.utils',
    'youtube-embed',
    'autocomplete',
    'jett.ionic.filter.bar'
]);


app.constant("FIREBASE_URL", 'https://dheerantv-e31bb.firebaseio.com');
app.constant("FACEBOOK_APP_ID", '<REPLACE-ME>');
app.constant('$ionicLoadingConfig', {
  template: '<i class="icon ion-loading-c" style="font-size: 30px;"></i>'
});
app.constant('YOUTUBE_PARAMS', {
    key: 'AIzaSyAiysYLd0qeMYQPYw2vPDW00usrFXH3gDw',
          type: 'video',
          maxResults: '5',
          part: 'id,snippet',
         // q: 'rajaneram',
          order: 'date',
          //channelId: 'UCikYeWfQdfPRgaH7PktVvhA',
         channelId: 'UCou08uTGtgncBwI_-W7ckhA',
    	  pageToken:'', //new change for paging on 20-07-2016
});

app.run(function ($rootScope, $ionicPlatform, $cordovaStatusbar) {


		$ionicPlatform.ready(function () {

			// Hide the accessory bar by default
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			// Color the iOS status bar text to white
			if (window.StatusBar) {
				$cordovaStatusbar.overlaysWebView(true);
				$cordovaStatusbar.style(0); //Light
			}

			 document.addEventListener("offline", onOffline, false);
			 document.addEventListener("pause", onPause, false);



            // Handle the offline event

            function onOffline() {
                navigator.notification.alert("You are offline.Please check your internet connection.",null, "Dheeran TV", "Ok");
            }


             function onPause() {
                             // Handle the pause event
                             console.log('pause event fired!!');
                             jwplayer("player").stop();
                           // jwplayer("player").pause();

                         }



		});
	});

app.config(function ($stateProvider, $urlRouterProvider, FACEBOOK_APP_ID) {
	openFB.init({appId: FACEBOOK_APP_ID});
});

app.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
	/*		.state('intro', {
				url: '/',
			//	templateUrl: 'templates/intro.html',
				controller: 'IntroCtrl'
			})*/

			.state('app', {
				url: "/app",
				abstract: true,
				templateUrl: "templates/menu.html",
				controller: 'MenuCtrl'
			})

			/*.state('app.search', {
				url: "/search",
				views: {
					'menuContent': {
						templateUrl: "templates/search.html",
						controller: 'SearchCtrl'
					}
				}
			})*/

			.state('app.home', {
            				url: "/home",
            				views: {
            					'menuContent': {
            						templateUrl: "templates/home.html",
            						controller: 'HomeCtrl'
            					}
            				},
            				onExit: function(){
                                console.log('exiting from home');
                                jwplayer("player").stop();
                               // jwplayer("player").pause();
                              }
            			})


	.state('app.rajaneram', {
            				url: "/rajaneram",
            				views: {
            					'menuContent': {
            						templateUrl: "templates/rajaneram.html",
            						controller: 'RajaneramCtrl'
            					}
            				}
            			})

.state('app.programs', {
            				url: "/programs",
            				views: {
            					'menuContent': {
            						templateUrl: "templates/programs.html",
            						controller: 'ProgramsCtrl'
            					}
            				}
            			})
.state('app.program', {
            				url: "/program/:name",
            				views: {
            					'menuContent': {
            						templateUrl: "templates/program.html",
            						controller: 'ProgramCtrl'
            					}
            				}
            			})


            			.state('app.aboutus', {
                                    				url: "/aboutus",
                                    				views: {
                                    					'menuContent': {
                                    						templateUrl: "templates/aboutus.html",
                                    						//controller: 'AboutusCtrl'
                                    					}
                                    				}
                                    			})
.state('app.contactus', {
                                    				url: "/contactus",
                                    				views: {
                                    					'menuContent': {
                                    						templateUrl: "templates/contactus.html",
                                    						//controller: 'AboutusCtrl'
                                    					}
                                    				}
                                    			})


                                    			.state('app.technical', {
                                                                                    				url: "/technical",
                                                                                    				views: {
                                                                                    					'menuContent': {
                                                                                    						templateUrl: "templates/technical.html",
                                                                                    						//controller: 'TechnicalCtrl'
                                                                                    					}
                                                                                    				}
                                                                                    			})

.state('app.broadcast', {
                                                                                    				url: "/broadcast",
                                                                                    				views: {
                                                                                    					'menuContent': {
                                                                                    						templateUrl: "templates/broadcast.html",
                                                                                    						//controller: 'TechnicalCtrl'
                                                                                    					}
                                                                                    				}
                                                                                    			})


.state('app.advertise', {
                                                                                    				url: "/advertise",
                                                                                    				views: {
                                                                                    					'menuContent': {
                                                                                    						templateUrl: "templates/advertise.html",
                                                                                    						//controller: 'TechnicalCtrl'
                                                                                    					}
                                                                                    				}
                                                                                    			})




			.state('app.show', {
				url: "/show/:showId",
				cache: false,
				views: {
					'menuContent': {
						templateUrl: "templates/show.html",
						controller: 'ShowCtrl'
					}
				}
			})
		;

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/app/home');

	});
