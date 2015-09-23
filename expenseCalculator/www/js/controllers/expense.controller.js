(function () {
    'use strict';

    angular
        .module( 'app.expenseController', ['app.dataKeeperService'] )
        .controller( 'ExpenseController', ExpenseController );

    ExpenseController.$inject = ['$rootScope', '$scope', 'DataKeeperService'];

    function ExpenseController( $rootScope, $scope, DataKeeperService ) {
        $scope.price = 0;
        $scope.count = 1;
        $scope.dailyLimit = DataKeeperService.dailyLimit;
        $scope.availableLimit = $scope.dailyLimit;
        $scope.favoriteProducts = DataKeeperService.favoriteProducts;
        $scope.purchasedProducts = [];
        $scope.addToDailyProductList = addToDailyProductList;
        $scope.removeProduct = removeProduct;
        $scope.$watchCollection( 'purchasedProducts', calculateAvailableLimit );
        $scope.$on( 'dailyLimitChanged', function ( event, args ) {
            debugger;
            $scope.dailyLimit = DataKeeperService.dailyLimit;
        } );

        function addToDailyProductList() {
            $scope.purchasedProducts.push( {
                id: $scope.selectedProduct.id,
                name: $scope.customProduct ? $scope.customProduct : $scope.selectedProduct.name,
                price: $scope.price * $scope.count
            } );
            resetDefaultValues();
        }

        function removeProduct( index ) {
            $scope.purchasedProducts.splice( index, 1 );
        }

        function calculateAvailableLimit() {
            var amount = 0;
            $scope.purchasedProducts.forEach( function ( product ) {
                amount += product.price;
            } );

            $scope.availableLimit = $scope.dailyLimit - amount;
        }

        function resetDefaultValues() {
            $scope.count = 1;
            $scope.customProduct = '';
        }
    }
})();