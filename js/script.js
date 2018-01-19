/// <reference path="route.js" />
app.controller("MenuController",['$scope', '$http', '$log', function ($scope,$http,$log) {
		
       
		$http.get('database/pop_breakfast_data.json')
		.then(function(response){
		$scope.breakfast_items = response.data;
		}),function(err){
		$log.error(err);
		}
		
		$http.get('database/pop_lunch_data.json')
		.then(function(response){
		$scope.lunch_items = response.data;
		}),function(err){
		$log.error(err);
		}
		
		$http.get('database/pop_dinner_data.json')
		.then(function(response){
		$scope.dinner_items = response.data;
		}),function(err){
		$log.error(err);
		}
		
		$http.get('database/pop_beverage_data.json')
		.then(function(response){
		$scope.beverage_items = response.data;
		}),function(err){
		$log.error(err);
		}
		
		$http.get('database/pop_dessert_data.json')
		.then(function(response){
		$scope.dessert_items = response.data;
		}),function(err){
		$log.error(err);
		}
		
		$http.get('database/pop_combo_data.json')
		.then(function(response){
		$scope.combo_items = response.data;
		}),function(err){
		$log.error(err);
		}
		
		
}]);




  
