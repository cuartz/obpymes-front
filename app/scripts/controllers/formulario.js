'use strict';

/**
 * @ngdoc function
 * @name ob-pymes.controller:FormularioCtrl
 * @description
 * # FormularioCtrl
 * Controller of the ob-pymes
 */
angular
	.module('ob-pymes').controller('FormularioCtrl', function ($scope,$http) {
		$scope.condicion=true;
        $scope.headerClass = 'process-header';
		
		$scope.regexrfc='^([A-z\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-z\\d]{3})?';

		$scope.valida = function(){
			$scope.$parent.deshabilitado = (!$scope.cliente.rfc) || (!$scope.cliente.nombre) || (!$scope.cliente.apPaterno) /*|| (!$scope.cliente.email === $scope.email) */|| (!$scope.cliente.email) || (!$scope.cliente.codigoPostal);
		};
		
		$scope.rfcToUpperCase = function() {
			$scope.cliente.rfc = $scope.cliente.rfc.toUpperCase();
		};

		$scope.autorizarDatos = function(){
			if(!$scope.checkAutorizar){
				return true;
			}

			if(!!$scope.cliente && !!$scope.cliente.rfc && !!$scope.cliente.nombre &&  !!$scope.cliente.apMaterno && !!$scope.cliente.email && !!$scope.email && !!$scope.cliente.codigoPostal ){
						
			$http.post('http://localhost:8080/	solicitud/nueva', $scope.cliente).
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
						.error(function(){
							$scope.mensaje = '<span class="alert alert-danger" style="color: gray;">Datos Incorrectos, Favor de verificar</span>';
							$scope.verMensaje = true;
						});

				return true;

			}else{
				$scope.mensaje = '<span class="alert alert-danger" style="color: gray;"> Datos Incorrectos, Favor de verificar </span>';
				$scope.verMensaje = true;
			}
		};		
	});
