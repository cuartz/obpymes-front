'use strict';
/**
 * @ngdoc function
 * @name ob-pymes.controller:RequirementsCtrl
 * @description
 * # RequirementsCtrl
 * Controller of the ob-pymes
*/
var app = angular.module('generalServices',[]);

app.factory('ConsumeRestService', ['$http', function ($http) {
    return {
        callService: function (url, method, payload, headers) {
            var xhr = $http({
                    'method': method,
                    'url': 'http://localhost:8080' + url,
                    'headers': headers || {} 
                });
            xhr.success(payload);
            xhr.error(payload);
            return xhr;
        }
    };
}]);


