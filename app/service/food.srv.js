 
 (function(){

 	angular.module("service_module",[]);

	angular.module("service_module").service("foodService",function($http,$q){

		this.getRestaurants = function() {
			var deferred = $q.defer();
			$http.get("http://localhost:8000/restaurant").then(
				function(data) {
					deferred.resolve(data);
				},
				function(data) {
					deferred.reject(data);
				}
			);
			return deferred.promise;
		};

 	});

})();