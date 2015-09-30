angular.module('app', [
  'ionic',
  'ui.utils.masks',
  'app.currency',
  'app.expenseController',
  'app.settingsController'
])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if ( window.cordova && window.cordova.plugins.Keyboard ) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if ( window.StatusBar ) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })

      .state('app.expenses', {
        url: '/expenses',
        views: {
          'menuContent': {
            templateUrl: 'templates/expenses.html',
            controller: 'ExpenseController as expenseCtrl'
          }
        }
      })

      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'templates/settings.html',
            controller: 'SettingsController as settingsCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/expenses');
  });
