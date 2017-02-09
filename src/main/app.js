(function(app){
	'use strict';
	app.config(function ($routeProvider, $locationProvider) {

		$routeProvider
		.when('/', {
			title: 'Project',
			templateUrl: "main.html",
		});
	});

	app.controller('AppCtlr', function($rootScope){
		var self = this;
	});
})(angular.module('app', [
	'ngResource',
	'ngSanitize',
	'ngRoute'
]));
