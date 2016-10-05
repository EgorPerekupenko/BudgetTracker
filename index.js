var Budget=angular.module('budgetTracker',[]);
Budget.controller('myCtrl',['$scope',function($scope){
	    
	    $scope.myincome= [];
	            
	            $scope.myTotalIncome= 0;
	            
	            $scope.myTotalExpenses= 0;
	    							
                
	        $scope.income = function(){
	        															
	      

	        	$scope.myincome.push({
	        		
	        		description: $scope.newdescription,
	        		amount:      $scope.newamount

	        	});

	        };
	           $scope.myexpense =[];

	              $scope.expense=function(){

	              	$scope.myexpense.push({
	              		
	              		description : $scope.newDescriptionTwo,
	              		amount    : $scope.newAmountTwo

	              	

	              	});
	            
	            
	            $scope.myTotalIncome=$scope.myTotalIncome+$scope.newamount;
	            
	            $scope.myTotalExpenses=$scope.myTotalExpenses+$scope.newAmountTwo;
	            
	            $scope.amountLeft=$scope.myTotalIncome-$scope.myTotalExpenses;
 
	            };

                
	}]);
