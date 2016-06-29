(function(){
	angular.module("main_module", ["ngRoute", "food_module", "service_module", "custom_directive"]);

	angular.module("main_module").config(function($routeProvider, $locationProvider){
		$routeProvider
		.when("/restaurants2", {
			templateUrl: '/app/page/restaurants.html'
		})
		.otherwise({
			templateUrl: '/app/page/restaurants.html'
		})
	});
})();