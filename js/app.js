'use strict';

var app = angular.module('war', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'partials/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'HC'
			});

	}]);
