(function () {
  'use strict';

  angular
    .module('app.currency', [])
    .directive('appCurrency', [ 'DataKeeperService', function (DataKeeperService) {
      return {
        require: 'ngModel',
        restrict: 'E',
        replace: true,
        scope: {
          value: '=ngModel',
          sign: '='
        },
        templateUrl: 'js/directives/currency.html',
        link: function ($scope) {
          $scope.sign = '$';
          $scope.beforeValue = true;
        }
      }
    } ]);
})();