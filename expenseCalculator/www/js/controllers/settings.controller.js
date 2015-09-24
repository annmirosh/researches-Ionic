(function () {
  'use strict';

  angular
    .module('app.settingsController', [ 'app.dataKeeperService' ])
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = [ '$rootScope', 'DataKeeperService' ];

  function SettingsController($rootScope, DataKeeperService) {
    var vm = this;

    vm.settings = {
      dailyLimit: DataKeeperService.dailyLimit,
      defaultProducts: DataKeeperService.favoriteProducts
    };

    vm.save = save;
    vm.addProduct = addProduct;
    vm.removeDefaultProduct = removeDefaultProduct;

    function save() {
      DataKeeperService.save('dailyLimit', vm.settings.dailyLimit);
    }

    function addProduct() {
      vm.settings.defaultProducts.push({name: vm.settings.product});
      DataKeeperService.save('favoriteProducts', vm.settings.defaultProducts);
    }

    function removeDefaultProduct(index) {
      vm.settings.defaultProducts.splice(index, 1);
    }
  }
})();