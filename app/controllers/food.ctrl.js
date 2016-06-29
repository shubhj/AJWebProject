

(function(){
	var ang = angular.module("food_module", ["custom_directive", "service_module"]); // Square brackets contains the list of dependent modules, declaring a module

	ang.controller("userDetailsController",function( $scope){
		if (localStorage.getItem('name'))
		{
			$scope.name = localStorage.getItem('name');
			$scope.address = localStorage.getItem('address');
		}

		$scope.setDetails=function(){
			localStorage.removeItem('name');
			localStorage.removeItem('address');
			localStorage.setItem('name',$scope.name);
			localStorage.setItem('address',$scope.address);
		};
	});

	
	ang.controller("CuisineListController",function($scope, foodService){
		
		$scope.restaurants = restaurantsData = [];
		$scope.cuisines = [];
		
		(function(){
			foodService.getRestaurants().then(function(result){
				$scope.restaurants = restaurantsData = result.data;
				var cuisines = [];
				restaurantsData.forEach(function(restaurant){
					cuisines.push(restaurant.cuisine)
				});
				$scope.cuisines = cuisines;
			})
		})();

		console.log($scope.cuisines)

	});



})();


