'use strict';

/**
 * @ngdoc function
 * @name ob-pymes.controller:CondicionesCtrl
 * @description
 * # CondicionesCtrl
 * Controller of the ob-pymes
 */
(function(angular) {
	  angular.module('ob-pymes').service('EntityService', function($q) {
	    
		
		  var service = {};
	    service.RECONNECT_TIMEOUT = 30000;
	    service.SOCKET_URL = 'http://localhost:8080/entity';
	    service.ENTITY_TOPIC = '/topic/entities';
	    
	    var getEntityMessage = function(data) {
	      var message = JSON.parse(data);
	      return message;
	    };
	    
	    service.initialize = function(entityNameParam) {

		    var socketService = {
		    	socket : {
			      client: null,
			      stomp: null
	    		},
			    listener : $q.defer(),
			    entityName:entityNameParam
			};
		    socketService.socket.stomp = Stomp.over(new SockJS(service.SOCKET_URL));
		    socketService.socket.stomp.connect({},  function() {

	            socketService.socket.stomp.subscribe(service.ENTITY_TOPIC+'/'+socketService.entityName, function(data){
	            	socketService.listener.notify(getEntityMessage(data.body));
	            });
	        });
		    		
		    		
		    		
	      socketService.receive = function() {
		      return this.listener.promise;
		    };
			
	      return socketService;
	    };
	    
		service.sendMessageToQueue=function(http, message, idQ){
			http({url:'http://localhost:8080/modifyEntity', method:'post',data:{variableName:idQ,entity:message}})
			.success(function(){
			})
			.error(function(){
			});
		};
	    
	    return service;
	  });
	})(angular);
