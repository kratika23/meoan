app.controller('DatePickerController',['$scope', '$filter', function($scope,$filter){
$scope.processDate = function(dt)
{
   $scope.date  = $filter('date')(dt, 'dd-MM-yyyy');
return date;	
}
  $scope.insertData = function(){
if(localStorage !== undefined)
  {
localStorage.setItem ('date', $scope.date);  
localStorage.setItem("username", $scope.username);
localStorage.setItem("number", $scope.mobile_number);
window.location.href='index.html#/menu';
}
};
  
}]);