'use strict';

angular.module('war')
  .controller('DetailCtrl', ['$routeParams','DataSrc', DetailCtrl]);



function DetailCtrl($routeParams, DataSrc) {

  var vm = this;
  vm.phoneId = $routeParams.id;

  vm.getServer = function() {

  	setInterval(function() {
	  	DataSrc.serverById(vm.phoneId)
	  	.then(function(response) {
	  		vm.server = response.data;
	  	})
	  	.catch(function(err) {
	  		console.log(err);
	  	});
  	}, 500);
  };

}