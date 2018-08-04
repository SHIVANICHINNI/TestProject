(function(){
	console.log("This is home Ctrl start");
	var app = angular.module("jcs");
	app.controller("homeCtrl", function($scope) {
	$scope.msg = "this is main page";
	});
	console.log("This is home Ctrl end");
})();