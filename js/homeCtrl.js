'use strict';

angular.module('war')
  .controller('HomeCtrl', ['DataSrc', HomeCtrl]);



function HomeCtrl(DataSrc) {

  var vm = this;
  vm.servers;

  vm.getServer = function(){
  	DataSrc.getServerData()
  	.then(function(servers){
  		vm.servers = servers.data.data;
  	})
  	.catch(function(err) {
  		console.log(err);
  	});
  };




}
