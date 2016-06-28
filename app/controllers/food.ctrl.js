

(function(){
	var ang = angular.module("food_module", ["custom_directive"]); // Square brackets contains the list of dependent modules, declaring a module

	ang.controller("userDetailsController",function($rootScope, $scope){
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

})();

