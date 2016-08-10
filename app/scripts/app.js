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
		'ngTouch',
		'generalServices',
	])
	.config(function ($routeProvider) {
		$routeProvider
		  .when('/', {
	        templateUrl: 'views/requirements.html',
	        controller: 'RequirementsCtrl'
	      })
	      .when('/formulario', {
	        templateUrl: 'views/formulario.html',
	        controller: 'FormularioCtrl'
	      })
	      .otherwise({
					redirectTo: '/'
	      });
    });

