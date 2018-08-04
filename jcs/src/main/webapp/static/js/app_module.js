(function() {
		console.log("app module start");
	var app = angular.module("jcs", ["ngRoute"]);
	app.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
			templateUrl : "static/templates/home.html",
			controller : "homeCtrl"
		})
		.when("/about", {
			templateUrl : "static/templates/about.html",
			controller : "aboutCtrl"
		})
		.when("/contact", {
			 templateUrl : "static/templates/contact.html",
			 controller : "contactCtrl"
		})
		.when("/services", {
			 templateUrl : "static/templates/services.html",
			 controller : "servicesCtrl"
		})
		.when("/cases", {
			templateUrl : "static/templates/cases.html",
			controller : "casesCtrl"
		});
	});
	console.log("app module close");	
})(); 


