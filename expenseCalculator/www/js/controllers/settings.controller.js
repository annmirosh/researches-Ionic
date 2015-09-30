(function () {
  'use strict';

  angular
    .module('app.settingsController', [ 'app.dataKeeperService' ])
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = [ '$rootScope', 'DataKeeperService', '$scope' ];

  function SettingsController($rootScope, DataKeeperService, $scope) {
    var vm = this,
      dollarSign = {
        sign: '$',
        beforeValue: true
      },
      rubSign = {
        sign: 'руб.',
        beforeValue: false
      };

    vm.settings = {
      dailyLimit: DataKeeperService.dailyLimit,
      defaultProducts: DataKeeperService.favoriteProducts,
      currencies: [ dollarSign, rubSign ],
      selectedCurrency: dollarSign
    };

    vm.save = save;
    vm.addProduct = addProduct;
    vm.removeDefaultProduct = removeDefaultProduct;

    function save() {
      DataKeeperService.save('dailyLimit', vm.settings.dailyLimit);
      DataKeeperService.save('favoriteProducts', vm.settings.defaultProducts);
    }

    function addProduct() {
      if ( this.addProductForm.$valid ) {
        vm.settings.defaultProducts.push({name: vm.settings.product});
      }
    }

    function removeDefaultProduct(index) {
      vm.settings.defaultProducts.splice(index, 1);
    }
  }
})();