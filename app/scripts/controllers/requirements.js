'use strict';
/**
 * @ngdoc function
 * @name ob-pymes.controller:RequirementsCtrl
 * @description
 * # Requirements
 * Controller of the ob-pymes
*/
var app = angular.module('ob-pymes');

function RequirementsCtrl($scope, api) {
    var vm = this;
    api.callService('/mensajes?id=0', 'GET',1).then(function(d) {
      vm.condicion = d;
    });
    api.callService('/mensajes?id=1', 'GET',300).then(function(d) {
        vm.documento1 = d;
	});
	api.callService('/mensajes?id=2', 'GET',400).then(function(d) {
		vm.documento2 = d;
	});
	api.callService('/mensajes?id=3', 'GET',400).then(function(d) {
		vm.documento3 = d;
	});
	$scope.$parent.deshabilitado = false;
	$scope.$parent.nextPath = '/formulario';
}

app.controller('RequirementsCtrl', ['$scope', 'ConsumeRestService', RequirementsCtrl ]);




