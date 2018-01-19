var app = angular.module('app', ['ngRoute', 'ngAnimate','ui.bootstrap']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
	$routeProvider
    .when('/home', {
        templateUrl: 'partials/home.html'
    })
    .when('/menu', {
        templateUrl: 'partials/menu.html'
    })
    .when('/our_vision', {
        templateUrl: 'partials/our_vision.html'
    })
    .when('/contact_us', {
        templateUrl: 'partials/contact_us.html'
    })
	.when('/shopping_cart', {
        templateUrl: 'partials/shopping_cart.html'
    })
    .otherwise({
        redirectTo: '/home'
    });
}]);


app.controller('TestCtrl', function TestCtrl() {
    var self = this;

    this.showBoxOne = false;
    this.showBoxTwo = false;
    this.showBoxThree = false;
    this.showBoxFour = false;

});