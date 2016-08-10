'use strict';

/**
 * @ngdoc function
 * @name ob-pymes.controller:CondicionesCtrl
 * @description
 * # CondicionesCtrl
 * Controller of the ob-pymes
 */
angular
	.module('ob-pymes').controller('AdminCtrl', function ($scope, $http, EntityService) {
		
		$scope.changeMensaje1=function(){
			EntityService.sendMessageToQueue($http, $scope.condicionModif, 'mensaje1');
		};
		
		$scope.changeRFC=function(){
			EntityService.sendMessageToQueue($http, $scope.rfcInvalidos, 'rfcInvalidos');
		};
		
	});
