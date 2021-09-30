app.controller('MainController', ['$scope', function($scope) {
	// body...
}]) 

app.controller('GreetingController', ['$scope', function($scope) {
	$scope.greeting = 'Welcome to World Bank!!!';
}]);


// pin
app.controller('Enterpin', ['$scope', function($scope) {
	$scope.enterpin = 'Please Enter Your Pin';
}]);
app.controller('typepin', ['$scope', function($scope) {
	$scope.togglePassword = function () { $scope.typePassword = !$scope.typePassword; }
}]);

app.controller('Multiply', ['$scope',function($scope){
	$scope.product = function(value) {return value * 2}
}]);

//try
app.controller('getadd', ['$scope',function($scope){
	$scope.add =  function(num1, num2){
		$scope.txtsum = 'Sum : ';
		$scope.sum = parseInt(num1) + parseInt(num2);
	}
}]);

// CASH WITHDRAW
app.controller('withdraw', ['$scope',function($scope){
	$scope.type =  function(num1){
		$scope.txt = 'You enter amount is : ';
		$scope.ans =parseInt(num1);
		$scope.txtsum = 'Your remaining balance is : ';
		$scope.ans2 = 1000000 - parseInt(num1);
	}
}]);


// BILL PAYMENT
app.controller('billno', ['$scope',function($scope){
	$scope.bills =  function(num1){
		$scope.txtr = 'Reference No. : ';
		$scope.ansr =parseInt(num1);
	}
}]);
app.controller('bill', ['$scope',function($scope){
	$scope.type =  function(num1){
		$scope.txt = 'The bill you pay cost : ';
		$scope.ans =parseInt(num1);
		$scope.txtsum = 'Your remaining balance is : ';
		$scope.ans2 = 1000000 - parseInt(num1);
	}
}]);


// BALANCE INQUIRY
app.controller('Balance', ['$scope',function($scope){
	$scope.balance = 'Php. 1,000,000.00';
}]);


// TRANSFER
app.controller('transferno', ['$scope',function($scope){
	$scope.type =  function(num1){
		$scope.txtr = 'Account No. : ';
		$scope.ansr =parseInt(num1);
	}
}]);
app.controller('transfer', ['$scope',function($scope){
	$scope.type =  function(num1){
		$scope.txt = 'Total money you transfer is : ';
		$scope.ans =parseInt(num1);
		$scope.txtsum = 'Your remaining balance is : ';
		$scope.ans2 = 1000000 - parseInt(num1);
	}
}]);


// DEPOSIT
app.controller('deposit', ['$scope',function($scope){
	$scope.type =  function(num1){
		$scope.txt = 'Total money you deposit is : ';
		$scope.ans =parseInt(num1);
		$scope.txtsum = 'Your current balance is : ';
		$scope.ans2 = 1000000 + parseInt(num1);
	}
}]);