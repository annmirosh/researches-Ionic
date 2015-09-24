(function () {
  'use strict';

  angular
    .module('app.dataKeeperService', [])
    .service('DataKeeperService', DataKeeperService);


  function DataKeeperService() {
    var self = this;
    self.dailyLimit = localStorage.getItem('dailyLimit') || 50;
    self.favoriteProducts = [
      {name: 'Regular lunch'},
      {name: 'Milk'},
      {name: 'Strawberry'},
      {name: 'Salmon'},
      {name: 'Pringles'},
      {name: 'Tomato'},
      {name: 'Spinach'},
      {name: 'Cola'},
      {name: 'Tangerine Juice'}
    ];
    self.save = function (key, value) {
      self[ key ] = value;
      localStorage.setItem(key, value);
    }
  };
})();