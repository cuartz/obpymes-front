'use strict';
/**
 * @ngdoc function
 * @name ob-pymes.service:generalServices
 * @description
 * # generalServices
 * Service of the ob-pymes
 */
 var app = angular.module('generalServices',[]);

 app.factory('ConsumeRestService', ['$http', '$q', '$timeout', function ($http, $q, $timeout) {
    var promise;
    var serviceAjaxRequest =  {
        callService: function (url, method, minTimeTransaction, headers) {
            if ( !promise ) {
                var minTimeRequest = minTimeTransaction || 50000;

                var timeOutPromise = $timeout(function () {
                     canceler.resolve();
                     console.log('Time out: Se revaso el tiempo de espera configurado para ' + url + ' tiempo '+ minTimeRequest +' limite = ' + minTimeRequest);
                 }, minTimeRequest);

                var canceler = $q.defer();
                var status = 'Request submited';
                var startTime = (new Date()).getTime();
                promise = $http({
                    'method': method,
                    'url': 'http://localhost:8080' + url,
                    'headers': headers || {},
                    'timeout': canceler.promise
                }).then(function(response) {
                    var endTime = (new Date()).getTime();
                    status = 'Respuesta correcta en  ' + (endTime - startTime) + ' msec. Para: ' + url;
                    console.log(status);
                    $timeout.cancel(timeOutPromise);
                    return response.data;
                });
            }
            return promise;
        }
    };
    return serviceAjaxRequest;
}]);


