(function () {
	angular.module('geApp', ['ui.router', 'geControllers', 'geServices'])

	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$stateProvider

		.state('login', {
			url: '/login',
			templateUrl: 'templates/login.html'
		})

		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html'
		});

		$urlRouterProvider.otherwise('/login');

	}]);
})();
