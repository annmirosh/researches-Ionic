(function () {
  'use strict';

  angular
    .module('app.settingsController', [ 'app.dataKeeperService' ])
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = [ '$rootScope', '$scope', 'DataKeeperService' ];

  function SettingsController($rootScope, $scope, DataKeeperService) {

    $scope.settings = {
      dailyLimit: DataKeeperService.dailyLimit,
      defaultProducts: DataKeeperService.favoriteProducts
    }

    $scope.save = save;
    $scope.addProduct = addProduct;

    function save() {
      DataKeeperService.save('dailyLimit', $scope.settings.dailyLimit);
      $rootScope.$broadcast('dailyLimitWasChanged', {});
    }

    function addProduct() {
      $scope.settings.defaultProducts.push({name: $scope.settings.product});
      DataKeeperService.save('favoriteProducts', $scope.settings.defaultProducts);
      $rootScope.$broadcast('favoriteProductsWereChanged', {});
    }
  }
})();