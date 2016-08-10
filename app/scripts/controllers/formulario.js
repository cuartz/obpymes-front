'use strict';

/**
 * @ngdoc function
 * @name ob-pymes.controller:CondicionesCtrl
 * @description
 * # CondicionesCtrl
 * Controller of the ob-pymes
 */
angular
	.module('ob-pymes').controller('FormularioCtrl', function ($scope, $http, EntityService) {
		
				EntityService.initialize('mensaje1')
			.receive()
				.then(null,null, function(entityMessage){
					$scope.condicion=entityMessage;
		});
		
        $scope.headerClass = 'process-header';
				//$scope.regexrfc='^([A-Z\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z\\d]{3})?';
		$scope.regexrfc='^([A-Z\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\\d]{3})';
		
		$scope.$parent.deshabilitado=true;
		$scope.validaRFC=function(){
			if($scope.rfcInvalidos && $scope.cliente.rfc && $scope.rfcInvalidos.contenido.split(',').indexOf($scope.cliente.rfc) !== -1) {
				return false;
			}
			
			//$scope.$parent.deshabilitado=
			if ($scope.cliente && $scope.cliente.rfc){
				return $scope.cliente.rfc;
			} //&& !$scope.cliente.rfc);// || !($scope.cliente.email===$scope.email);
			return false;
		};
		
		$scope.enviarSolicitud=function(){
			//$scope.cliente;
		};
		
		EntityService.initialize('rfcInvalidos')
			.receive()
				.then(null,null, function(entityMessage){
					$scope.rfcInvalidos=entityMessage;
		});
		
				$scope.valida = function(){




			$scope.$parent.deshabilitado= !($scope.cliente.rfc) || 
			!($scope.cliente.nombre) || !($scope.cliente.apPaterno) || 
			!($scope.cliente.apMaterno) || 
			($scope.cliente.email!==$scope.email) || 
			!$scope.cliente.email || 
			!$scope.cliente.codigoPostal;








		};
		$scope.autorizarDatos = function(){
			if(!$scope.checkAutorizar){
				return true;
			}

			if(!!$scope.cliente && !!$scope.cliente.rfc && !!$scope.cliente.nombre &&  !!$scope.cliente.apMaterno && !!$scope.cliente.email && !!$scope.email && !!$scope.cliente.codigoPostal ){
						
			$http.post('http://localhost:8080/solicitud/nueva', $scope.cliente).
						success(function(data) {
						$scope.condicion = data;
						$scope.verMensaje = false;
						if(data){
							$scope.mensaje = '<span class="alert alert-danger" style="color: gray;">Cliente No deseado </span>';
							$scope.verMensaje = true;
						}else{
							$scope.mensaje = '<span class="alert alert-success" style="color: gray;">Cliente valido</span>';
							$scope.verMensaje = true;
						}
						})
						.error(function(data){
							if (data && data.MensajeError){
								$scope.mensaje = '<span class="alert alert-danger" style="color: gray;">'+data.MensajeError+'</span>';
							}else{
								$scope.mensaje = '<span class="alert alert-danger" style="color: gray;">Datos Incorrectos, Favor de verificar</span>';
							}
							$scope.verMensaje = true;
						});

				return true;

			}else{
				$scope.mensaje = '<span class="alert alert-danger" style="color: gray;"> Datos Incorrectos, Favor de verificar </span>';
				$scope.verMensaje = true;
			}
		};	
	});
