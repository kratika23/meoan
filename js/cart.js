app.controller('cartController',[ '$scope','cartStorage', function($scope, cartStorage) {

    var self = this;
	$scope.cartStorage = JSON.parse(localStorage.getItem("Records"));

	
	$scope.calcTotalquantity = function(){
	var total = 0;
	for(var i =0, max = $scope.cartStorage.items.length; i < max; i++){
	total += $scope.cartStorage.items[i].quantity;
	}
	$scope.total = total;
	return $scope.total;
	}
	
	$scope.calcTotalAmount = function(){
	var total = 0;
	for(var i =0, max = $scope.cartStorage.items.length; i < max; i++){
	total += (($scope.cartStorage.items[i].Price) * ($scope.cartStorage.items[i].quantity));
	}
	$scope.total = total;
	return $scope.total;
	}
	
	
    $scope.increaseItemAmount = function(item) {
      item.quantity++;
	var store = JSON.stringify($scope.cartStorage);
	localStorage.setItem("Records", store);
    }

    $scope.decreaseItemAmount = function(item) {
	  item.quantity--;
      if (item.quantity <= 0) {
        item.quantity = 0;
        var itemIndex = $scope.cartStorage.items.indexOf(item);
        if (itemIndex > 0) {
         $scope.cartStorage.items.splice(itemIndex, 1);
        }
      }
	  var store = JSON.stringify($scope.cartStorage);
	localStorage.setItem("Records", store);
    }

    $scope.removeFromCart = function(item) {
      item.quantity = 0;
      var itemIndex = $scope.cartStorage.items.indexOf(item);
      if (itemIndex > -1) {
        $scope.cartStorage.items.splice(itemIndex, 1);
      }
	  var store = JSON.stringify($scope.cartStorage);
	localStorage.setItem("Records", store);
    }
  }]);