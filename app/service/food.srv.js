 
 (function(){

 	angular.module("service_module",[]);

	angular.module("service_module").service("foodService",function($http,$q){

		this.getRestaurants = function() {
			var deferred = $q.defer();
			$http.get("http://localhost:9000/restaurants").then(
				function(data) {
					deferred.resolve(data);
					//console.log(data)
				},
				function(data) {
					deferred.reject(data);
				}
			);
			return deferred.promise;
		};

		this.getRestaurant = function(id) {	
			var deferred = $q.defer();
			$http.get("http://localhost:9000/restaturants/"+id).then(
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