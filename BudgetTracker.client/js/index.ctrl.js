angular.module('app').controller('BudgetController', function($scope) {

  // Arrays of entry objects
  $scope.expenseEntries =[];
  $scope.incomeEntries =[];

  // Objects for new expense and income entries
  $scope.newExpense = {description:'',
                      amount: 0};
  $scope.newIncome = {description:'',
                      amount: 0};

  $scope.totalIncome = 0;
  $scope.totalExpenses = 0;
  $scope.incomeLeft = 0;

  // Add new expense:
  //  Create new expense object, push it to expense array,
  //  and initialize the scope expense object
  $scope.addExpense = function () {

    var newEntry = {description: $scope.newExpense.description,
                      amount: $scope.newExpense.amount}
    $scope.expenseEntries.push(newEntry);
    $scope.updateTotalExpenses();
    $scope.newExpense.amount = 0;
    $scope.newExpense.description = '';
  };

  // Add new income:
  //  Create new income object, push it to income array,
  //  and initialize the scope income object
  $scope.addIncome = function () {

    var newEntry = {description: $scope.newIncome.description,
                      amount: $scope.newIncome.amount};
    $scope.incomeEntries.push(newEntry);
    $scope.updateTotalIncome();
    $scope.newIncome.amount = 0;
    $scope.newIncome.description = '';
  };

  // Update total income and incomeLeft
  //  by adding the new income amount
  $scope.updateTotalIncome = function() {
    $scope.totalIncome = parseFloat($scope.totalIncome) + parseFloat($scope.newIncome.amount);
    $scope.incomeLeft = parseFloat($scope.incomeLeft) + parseFloat($scope.newIncome.amount);
  };

  // Update total expenses by adding the new expense amount
  // Update incomeLeft by subtracting the new expense amount
  $scope.updateTotalExpenses = function() {
    $scope.totalExpenses = parseFloat($scope.totalExpenses) + parseFloat($scope.newExpense.amount);
    $scope.incomeLeft = parseFloat($scope.incomeLeft) - parseFloat($scope.newExpense.amount);
  };


});
