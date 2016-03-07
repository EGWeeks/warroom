'use strict';

var app = angular.module('war', ['ngRoute']);


	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'partials/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'HC'
			})
			.when('/:id', {
				templateUrl: 'partials/server-detail.html',
				controller: 'DetailCtrl',
				controllerAs: 'DC'
			})
			.otherwise({
				redirctTo: '/'
			});

	}]);
