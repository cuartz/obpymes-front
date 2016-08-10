'use strict';

/**
 * @ngdoc function
 * @name ob-pymes.controller:CondicionesCtrl
 * @description
 * # CondicionesCtrl
 * Controller of the ob-pymes
 */
angular
	.module('ob-pymes').controller('CondicionesCtrl', function ($scope, $http, EntityService) {
		
	
		$http.get('http://localhost:8080/mensajes?id=0').
		success(function(data) {
			$scope.condicion = data;
			
		});
		
		$http.get('http://localhost:8080/mensajes?id=1').
        success(function(data) {
            $scope.documento1 = data;
        });
		$http.get('http://localhost:8080/mensajes?id=2').
        success(function(data) {
            $scope.documento2 = data;
        });
		$http.get('http://localhost:8080/mensajes?id=3').
        success(function(data) {
            $scope.documento3 = data;
        });
		
		$scope.$parent.deshabilitado=false;
		$scope.$parent.nextPath='/formulario';
		
		EntityService.initialize('mensaje1')
			.receive()
				.then(null,null, function(entityMessage){
					$scope.condicion=entityMessage;
		});
		
	});
