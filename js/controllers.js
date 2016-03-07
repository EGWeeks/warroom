'use strict';

angular.module('war')
  .controller('MainController', [MainController]);



function MainController () {
  var vm = this;
  vm.title = 'WAR ROOM RAWR!!';
  vm.subtitle = 'This is War!';
}
