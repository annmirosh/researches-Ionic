(function () {
    'use strict';

    angular
        .module( 'app.settingsController', ['app.dataKeeperService'] )
        .controller( 'SettingsController', SettingsController );

    SettingsController.$inject = ['$rootScope', '$scope', 'DataKeeperService'];

    function SettingsController( $rootScope, $scope, DataKeeperService ) {
        $scope.dailyLimit = DataKeeperService.dailyLimit;


        $scope.save = save;


        function save() {
            debugger;
            DataKeeperService.save( 'dailyLimit', $scope.dailyLimit );
            $rootScope.$broadcast( 'dailyLimitChanged',{} );
        }
    }
})();