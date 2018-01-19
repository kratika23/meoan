app.value('cartStorage', {
    items: []
  });

app.controller("StoreController",['$scope', 'cartStorage', function ($scope,cartStorage) {
		
		var self = this;
		$scope.cartStorage = cartStorage;
		$scope.inc = 0;
		
if(typeof(Storage) === null)
{	
  var get_all_items = JSON.stringify($scope.cartStorage);
	localStorage.setItem("Records", get_all_items);
}	
	
 if(typeof(Storage) !== null || typeof(Storage) !== undefined)
 {
	$scope.calcTotalquantity = function(){
	
	var total = 0;
	var getitems = JSON.parse(localStorage.getItem("Records"));
	var obj = "";
	var q =0;
	for(key in getitems.items)
	{	 
	obj = getitems.items[key];
	var total = parseInt(obj['quantity']) + total ;
	}
	if (total > 0)
	{
	$scope.total = total;
	return $scope.total;
	}
	}
	
	$scope.calcTotalAmount = function(){
	var total = 0;
	getitems = JSON.parse(localStorage.getItem("Records"));
	for(var i =0, max = getitems.items.length; i < max; i++)
	{
	total += ((getitems.items[i].Price) * (getitems.items[i].quantity));
	}
	if(total > 0)
	{
	$scope.total = total;
	return $scope.total;
	}
	}

	$scope.increaseItemAmount = function(item) {
	var getitems = JSON.parse(localStorage.getItem("Records"));
	var obj = "";
	for(key in getitems.items){	 
	var obj = getitems.items[key];
	if(obj['Name'] == item.Name)
	{
	var q = parseInt(obj['quantity']) + 1;
	this.quantity = q;
	obj['quantity'] = q;
	}
	}
	var store = JSON.stringify(getitems);
	localStorage.setItem("Records", store);
	}

	
    $scope.addToCart = function(item) {
	$scope.add = 0;
	var getitems = JSON.parse(localStorage.getItem("Records") || "[]");
	getitems.items.push(item);
	var store = JSON.stringify(getitems);
	localStorage.setItem("Records", store);
	this.add = this.add + 1;
	this.inc = 1;
	}

	$scope.decreaseItemAmount = function(item) {
    var getitems = JSON.parse(localStorage.getItem("Records"));
	var obj = "";
	var q =0;
	for(key in getitems.items)
	{	 
	var obj = getitems.items[key];
	if(obj['Name'] == item.Name)
	{
	var q = parseInt(obj['quantity']) - 1 ;
    obj['quantity'] = q;
	this.quantity = q;
	}
	}
	var store = JSON.stringify(getitems);
	localStorage.setItem("Records", store); 
    }
	
	$scope.removeFromCart = function(item) {
	var getitems = JSON.parse(localStorage.getItem("Records"));
    this.add = 0;
    this.inc = 0;	
	this.quantity = 0;
    for(key in getitems.items)
	{	 
	var obj = getitems.items[key];
	if(obj['Name'] == item.Name)
	{ 
	 var itemIndex = getitems.items.indexOf(item);
      if (itemIndex <  2) {
       getitems.items.splice(itemIndex, 1);
      }
	}
	}
	  var store = JSON.stringify(getitems);
	localStorage.setItem("Records", store);
    }
	}
}]);