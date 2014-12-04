"use strict";

// This creates a new Angular modeule named AddressBook with no dependencies.
angular.module('AddressBook', [])
	.controller('AddressController', function($scope) {
  		$scope.employees = pawneeEmployees;
  		$scope.order = 'lastName';
//This creates a new controller on the modeule named AddressControler with the controller's initialization.
//This is being initialize by two properties: employees and order.

  	$scope.sortBy = function(sortCol) {
  		if ($scope.sortCol == sortCol) {
  			$scope.sortReverse = !$scope.sortReverse;
  		}
  		else {
  			$scope.sortCol = sortCol;
  			$scope.sortReverse = false;
  		}
  	};

  	$scope.isSortedBy = function(colName) {
  		return colName == $scope.sortCol;
  	}
});

