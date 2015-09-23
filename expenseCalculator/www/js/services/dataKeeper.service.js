(function () {
    'use strict';

    angular
        .module( 'app.dataKeeperService', [] )
        .factory( 'DataKeeperService', DataKeeperService );


    function DataKeeperService() {
        return {
            dailyLimit: localStorage.getItem( 'dailyLimit' ) || 50,
            favoriteProducts: [
                {name: 'Regular lunch'},
                {name: 'Milk'},
                {name: 'Strawberry'},
                {name: 'Salmon'},
                {name: 'Pringles'},
                {name: 'Tomato'},
                {name: 'Spinach'},
                {name: 'Cola'},
                {name: 'Tangerine Juice'}
            ], save: function ( key, value ) {
                localStorage.setItem( key, value );
            }
        };
    }
})();