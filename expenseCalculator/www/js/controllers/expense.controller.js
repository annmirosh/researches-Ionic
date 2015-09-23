(function () {
  'use strict';

  angular
    .module('app.expenseController', [ 'app.dataKeeperService' ])
    .controller('ExpenseController', ExpenseController);

  ExpenseController.$inject = [ '$rootScope', '$scope', 'DataKeeperService' ];

  function ExpenseController($rootScope, $scope, DataKeeperService) {
    console.log('create ExpenseController')
    $scope.expenseInfo = {
      selectedProduct: null,
      customProduct: null,
      price: 0,
      count: 1
    };

    $scope.dailyLimit = DataKeeperService.dailyLimit;
    $scope.availableLimit = $scope.dailyLimit;
    $scope.favoriteProducts = DataKeeperService.favoriteProducts;
    $scope.purchasedProducts = [];
    $scope.addToDailyProductList = addToDailyProductList;
    $scope.removeProduct = removeProduct;
    $scope.$watchCollection('purchasedProducts', calculateAvailableLimit);
    $scope.$on('dailyLimitChanged', function (event, args) {
      $scope.dailyLimit = DataKeeperService.dailyLimit;
    });


    function addToDailyProductList() {
      $scope.purchasedProducts.push({
        name: $scope.expenseInfo.customProduct ? $scope.expenseInfo.customProduct : $scope.expenseInfo.selectedProduct.name,
        price: $scope.expenseInfo.price * $scope.expenseInfo.count
      });

      resetDefaultValues();
    }

    function removeProduct(index) {
      $scope.purchasedProducts.splice(index, 1);
    }

    function calculateAvailableLimit() {
      var amount = 0;
      $scope.purchasedProducts.forEach(function (product) {
        amount += product.price;
      });
      $scope.availableLimit = $scope.dailyLimit - amount;
    }

    function resetDefaultValues() {
      $scope.count = 1;
      $scope.expenseInfo.customProduct = '';
    }
  }
})();