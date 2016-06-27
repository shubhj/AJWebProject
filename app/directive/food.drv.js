

(function(){
	var ang = angular.module("custom_directive", []);

	
	ang.directive("userDetails" ,function(){
		return {
			restrict : 'E',
			templateUrl: 'app/template/userDetails.html'
		};
	});

	
	ang.directive("navbar" ,function(){
		return {
			restrict : 'E',
			templateUrl: 'app/template/navbar.html'
		};
	});

	

})();