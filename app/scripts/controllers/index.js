'use strict';

/**
 * @ngdoc function
 * @name ob-pymes.controller:CondicionesCtrl
 * @description
 * # CondicionesCtrl
 * Controller of the ob-pymes
 */
angular
	.module('ob-pymes').controller('IndexCtrl', function ($scope, $route, $location){//, $controller) {
		
		$scope.deshabilitado=false;
		$scope.nextPath='/';
		
		$scope.continuar=function(){
			 $location.path($scope.nextPath);
		};
	});
