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
    var vm = this;
    
    api.callService('/requirements/conditions', 'GET').then(function (data) {
        vm.conditions = data.body;
    });
    
    api.callService('/requirements/documents', 'GET').then(function (data) {
        vm.documents = data.body;
    });
    
    api.callService('/requirements/days', 'GET').then(function (data) {
	vm.days = data.body.days;
    });
    
    $scope.$parent.deshabilitado=false;
    $scope.$parent.nextPath = '/formulario';
}

app.controller('RequirementsCtrl', ['$scope', 'ConsumeRestService', RequirementsCtrl ]);