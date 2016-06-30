

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
		$scope.totalPrice=0;
		//$scope.restaurant = [];
		//console.log($scope.restaurantId);
		$scope.menubar={};
		foodService.getRestaurant($scope.restaurantId).then(function(result){
			//console.log($scope.restaurantId);
			$scope.restaurant=result.data;
			
			//console.log($scope.restaurant.id);
		})


		$scope.setMenu=function(){
			localStorage.removeItem('totalPrice');
			localStorage.removeItem('menubar');

			localStorage.setItem('totalPrice',$scope.totalPrice);
			localStorage.setItem('restaurant',$scope.restaurantId);
			console.log($scope.menubar);


			localStorage.setItem('menubar',JSON.stringify($scope.menubar));
			//console.log(localStorage.getItem('menubar'));
			//var userDetails = JSON.parse(localStorage.getItem('menubar'));
			//console.log(userDetails);
		};


		$scope.addItem = function(item){
			if($scope.menubar[item.name])
				$scope.menubar[item.name][0] = $scope.menubar[item.name][0]+1;
			else
				$scope.menubar[item.name]=[1, item.price];
			$scope.totalPrice=$scope.totalPrice+item.price;


		}
		$scope.deleteItem= function(item){
			$scope.menubar[item.name][0]=$scope.menubar[item.name][0]-1;
			$scope.totalPrice=$scope.totalPrice-item.price;
		}
	});

	ang.controller("checkoutController", function($scope){
		$scope.finalmenu = JSON.parse(localStorage.getItem('menubar'));
		$scope.totalPrice=localStorage.getItem('totalPrice');
		console.log($scope.finalmenu);
	});

})();


