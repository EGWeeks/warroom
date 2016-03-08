'use strict';

angular.module('war')
  .controller('HomeCtrl', ['DataSrc', HomeCtrl]);



function HomeCtrl(DataSrc) {

  var vm = this;
  
  vm.getServers = function(){
  	setInterval(function() {
	  	DataSrc.serverData()
	  	.then(function(servers){
	  		vm.servers = servers.data.data;
	  	})
	  	.catch(function(err) {
	  		console.log(err);
	  	});
  	}, 15000); 
  };

  vm.getServers();

}
