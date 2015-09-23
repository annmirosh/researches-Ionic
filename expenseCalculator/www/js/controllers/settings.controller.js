(function () {
  'use strict';

  angular
    .module('app.settingsController', [ 'app.dataKeeperService' ])
    .controller('SettingsController', SettingsController);

  SettingsController.$inject = [ '$rootScope', '$scope', 'DataKeeperService' ];

  function SettingsController($rootScope, $scope, DataKeeperService) {

    $scope.settings = {
      dailyLimit: DataKeeperService.dailyLimit
    }

    $scope.save = save;

    function save() {
      DataKeeperService.save('dailyLimit', $scope.settings.dailyLimit);
      $rootScope.$broadcast('dailyLimitChanged', {});
    }
  }
})();