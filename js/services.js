'use strict';

angular.module('war')
	.service('DataSrc', ['$http', DataSrc]);

	function DataSrc($http){

		

		this.serverData = function(){
			return $http({
				method: 'GET',
				url: 'http://localhost:3000/'
			})
			.then(function(response){
				return response;
			});
		};

	}