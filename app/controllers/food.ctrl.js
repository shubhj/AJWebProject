

(function(){
	var ang = angular.module("food_module", ["custom_directive"]); // Square brackets contains the list of dependent modules, declaring a module

	
	ang.controller("userDetailsController",function($scope){
		
/**		if($scope.name!=""  && $scope.address!=""){
			localStorage.setItem("name", $scope.name);
			localStorage.setItem("address", $scope.address);
		}
		**/
		//$scope.name=null;
		//$scope.address=null;
		//console.log($scope.name);
		$scope.setDetails=function(){
			localStorage.removeItem('name');
			localStorage.removeItem('address');
			localStorage.setItem('name',$scope.name);
			localStorage.setItem('address',$scope.address);
		};

	});

})();

