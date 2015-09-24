(function () {
  'use strict';

  angular
    .module('app.expenseController', [ 'app.dataKeeperService' ])
    .controller('ExpenseController', ExpenseController);

  ExpenseController.$inject = [ '$rootScope', '$scope', 'DataKeeperService' ];

  function ExpenseController($rootScope, $scope, DataKeeperService) {
    var vm = this;
    vm.expenseInfo = {
      selectedProduct: null,
      customProduct: null,
      price: 0,
      count: 1
    };

    vm.dailyLimit = DataKeeperService.dailyLimit;
    vm.availableLimit = vm.dailyLimit;
    vm.favoriteProducts = DataKeeperService.favoriteProducts;
    vm.purchasedProducts = [];
    vm.addToDailyProductList = addToDailyProductList;
    vm.removeProduct = removeProduct;

    function addToDailyProductList() {
      vm.purchasedProducts.push({
        name: vm.expenseInfo.customProduct ? vm.expenseInfo.customProduct : vm.expenseInfo.selectedProduct.name,
        price: vm.expenseInfo.price * vm.expenseInfo.count
      });

      resetDefaultValues();
      calculateAvailableLimit();
    }

    function removeProduct(index) {
      vm.purchasedProducts.splice(index, 1);
      calculateAvailableLimit();
    }

    function calculateAvailableLimit() {
      var amount = 0;
      vm.purchasedProducts.forEach(function (product) {
        amount += product.price;
      });
      vm.availableLimit = vm.dailyLimit - amount;
    }

    function resetDefaultValues() {
      vm.count = 1;
      vm.expenseInfo.customProduct = '';
    }

    return vm;
  }
})();