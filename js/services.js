'use strict';

angular.module('war')
	.service('DataSrc', ['$http', DataSrc]);

	function DataSrc($http){
	
		this.serverData = function(){
			return $http({
				method: 'GET',
				url: 'https://immense-temple-49256.herokuapp.com/'
			})
			.then(function(response){
				return response;
			});
		};

		this.serverById = function(id){
			return $http({
				method: 'GET',
				url: 'https://immense-temple-49256.herokuapp.com/'+ id
			})
			.then(function(response){
				return response;
			});
		};

	}