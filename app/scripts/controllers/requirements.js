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
	
    api.callService('/requirements/conditions', 'GET', function (data) {
        vm.conditions = data.body;
    });
	
    api.callService('/requirements/documents', 'GET', function (data) {
        vm.documents = data.body;
    });
	
    api.callService('/requirements/days', 'GET', function (data) {
	vm.days = data.body.days;
    });
	
    $scope.$parent.deshabilitado=false;
    $scope.$parent.nextPath = '/formulario';
}

app.controller('RequirementsCtrl', RequirementsCtrl );

RequirementsCtrl.$inject = ['$scope', 'ConsumeRestService'];

