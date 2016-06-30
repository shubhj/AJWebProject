(function(){
	angular.module("main_module", ["ngRoute", "food_module", "service_module", "custom_directive"]);

	angular.module("main_module").config(function($routeProvider, $locationProvider){
		$routeProvider
		.when("/restaurants2", {
			templateUrl: '/app/page/restaurants.html',
			controller: function($scope, foodService) {
				foodService.getRestaurants().then(function(result){
					$scope.restaurants = result.data;
				});
			}
		})
		.when("/menu/:resId", {
			templateUrl:'app/page/restaurant.html',
			controller:function($scope,$routeParams) {
				$scope.restaurantId = $routeParams.resId;
				//console.log($scope.restaurantId);
			}
		})
		.when("/checkout/:resId", {
			templateUrl:'app/page/checkout.html',
			controller:function($scope,$routeParams) {
				$scope.restaurantId = $routeParams.resId;
				//console.log($scope.restaurantId);
			}
		})
		.otherwise({
			templateUrl: '/app/page/restaurants.html',
			controller: function($scope, foodService) {
				foodService.getRestaurants().then(function(result){
					$scope.restaurants = result.data;
				});
			}
		})
	});


})();