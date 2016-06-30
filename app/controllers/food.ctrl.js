

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

	
	ang.controller("CuisineListController",function($scope, foodService) {
		
		$scope.restaurants = restaurantsData = [];
		

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

		//console.log($scope.cuisines)

		foodService.getRestaurants().then(function(result) {
			$scope.restaurants = restaurantsData = result.data;	
			var cuisines = [];
			restaurantsData.forEach(function(restaurant){
				cuisines.push(restaurant.cuisine)
			});
			cuisines = cuisines.filter( function( item, index, inputArray ) {
           		return inputArray.indexOf(item) == index;
    		});
			$scope.cuisines = cuisines;
		});


	});


	ang.controller("restaurantController",function($scope,foodService,$rootScope){
		$scope.price=0;
		//$scope.restaurant = [];
		//console.log($scope.restaurantId);

		foodService.getRestaurant($scope.restaurantId).then(function(result){
			//console.log($scope.restaurantId);
			$scope.restaurant=result.data;
			$scope.menubar={};
			//console.log($scope.restaurant.id);
			console.log($scope.restaurant);
		})

		$rootScope.accNo = function() {
		    return $scope.menubar;
		}

		/*pageB*/   
		$scope.showmenu = function() {
		    return $scope.menu = $rootScope.accNo();
		}


		$scope.addItem = function(item){
			if($scope.menubar[item.name])
				$scope.menubar[item.name]=$scope.menubar[item.name]+1;
			else
				$scope.menubar[item.name]=1;
			$scope.price=$scope.price+item.price;


		}
		$scope.deleteItem= function(item){
			$scope.menubar[item.name]=$scope.menubar[item.name]-1;
			$scope.price=$scope.price-item.price;
		}
	});


})();


