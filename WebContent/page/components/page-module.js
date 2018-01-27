var app = angular.module('app', [ 'ngRoute', 'application' ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'page/templates/home.html'
	}).when('/about', {
		templateUrl : 'page/templates/about.html'
	}).when('/pricing', {
		templateUrl : 'page/templates/pricing.html'
	}).otherwise({
		redirectTo : '/'
	});
}]);

app.controller('routeController', [ '$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
			
	$scope.noAuth = true;
			
	$scope.getPath = function(page) {
	  $scope.currentPage = page;
	}

	$scope.getLogin = function(page) {
	  $scope.noAuth = false;
	  $scope.currentPage = page;
	  $rootScope.currentPages = page;
	  $location.path('/login');
	}
	
}]);
