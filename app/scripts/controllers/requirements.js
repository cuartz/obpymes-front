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
    //debugger;
    var vm = this;

    api.callService('/mensajes?id=0', 'GET', function (data) {
        vm.condicion = data;
    });

    api.callService('/mensajes?id=1', 'GET', function (data) {
        vm.documento1 = data;
	});
	api.callService('/mensajes?id=2', 'GET', function (data) {
		vm.documento2 = data;
	});
	api.callService('/mensajes?id=3', 'GET', function (data) {
		vm.documento3 = data;
	});
	$scope.$parent.deshabilitado = false;
	$scope.$parent.nextPath = '/formulario';
}

app.controller('RequirementsCtrl', RequirementsCtrl );

RequirementsCtrl.$inject = ['$scope', 'ConsumeRestService'];

