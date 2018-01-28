var app = angular.module('application', [ 'ngRoute', ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl : 'App/templates/login.html',
		controller : 'loginController',
		controllerAs : 'login'
	}).when('/dashboard', {
		templateUrl : 'App/templates/dashboard.html'
	}).when('/settings', {
		templateUrl : 'App/templates/settings.html'
	}).otherwise({
		redirectTo : '/login'
	});
}]);

app.controller('loginController', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
			
    $scope.authenticate = function(page) {
		if ($scope.userName === "admin" && $scope.userPassword === "admin") {
			$scope.currentPage = page;
			$rootScope.currentPages = page;
			$rootScope.noAuths = true;
			$location.path("/dashboard");
		} else {
			$scope.errorMessage = "Please give valid credentials";
		}
	}
    
    $scope.getSettings = function(page) {
    	$rootScope.currentPages = page;
    }

}]);
