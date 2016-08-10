'use strict';

/**
 * @ngdoc overview
 * @name ob-pymes
 * @description
 * # ob-pymes
 *
 * Main module of the application.
 */
 
angular
	.module('ob-pymes', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
        templateUrl: 'views/condiciones.html',
        controller: 'CondicionesCtrl'
      })
      .when('/formulario', {
        templateUrl: 'views/formulario.html',
        controller: 'FormularioCtrl'
      })
			.otherwise({
				redirectTo: '/'
      });
	  
	  
  });

