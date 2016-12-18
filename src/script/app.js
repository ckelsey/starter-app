define([], function () {

	var app = angular.module('mainModule', [
		'ui.router',
		'oc.lazyLoad'
	]);

	app.config( function ($ocLazyLoadProvider, $stateProvider, $urlRouterProvider, $locationProvider) {

		$ocLazyLoadProvider.config({
			loadedModules: ['mainModule'],
			asyncLoader: require
		});

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'main.html'
		});

		$locationProvider.html5Mode(true);

	});

	app.bootstrap = function () {
		angular.bootstrap(document, ['mainModule']);
	};

	return app;
});
