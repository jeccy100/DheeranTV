var app = angular.module('dheerantv', [
	'ionic',
	'ngCordova',
	'firebase',
	'angular-moment',
	'dheerantv.controllers',
	'dheerantv.services',
	'dheerantv.filters',
	'dheerantv.utils',
    'youtube-embed'
]);


app.constant("FIREBASE_URL", 'https://dheerantv-e31bb.firebaseio.com');
app.constant("FACEBOOK_APP_ID", '<REPLACE-ME>');
app.constant('$ionicLoadingConfig', {
  template: 'Default Loading Template...'
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


            // Handle the offline event

            function onOffline() {
                navigator.notification.alert("You are offline.Please check your internet connection.",null, "Dheeran TV", "Ok");
            }
		});
	});

app.config(function ($stateProvider, $urlRouterProvider, FACEBOOK_APP_ID) {
	openFB.init({appId: FACEBOOK_APP_ID});
});

app.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('intro', {
				url: '/',
			//	templateUrl: 'templates/intro.html',
				controller: 'IntroCtrl'
			})

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
		$urlRouterProvider.otherwise('/');

	});
