'use strict';

/**
 * @ngdoc function
 * @name ob-pymes.controller:RequirementsCtrl
 * @description
 * # RequirementsCtrl
 * Controller of the ob-pymes
 */
angular
	.module('ob-pymes').controller('IndexCtrl', function ($scope, $route, $location){//, $controller) {
		
		$scope.deshabilitado = true;
		$scope.nextPath='/';
		
		$scope.continuar = function(){
			 $location.path($scope.nextPath);
		};
	});
