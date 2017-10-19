app.controller("gastoDetailController",["$scope","GastosService","$routeParams",function($scope,GastosService,$routeParams){
    /*Gastos Detail*/
    $scope.gastoDetailModel={};
    //Obtengo el valor del gatos id de la URL con el servicio de Angular $routeParams
    GastosService.dbGetGastoDetail($routeParams.id).then(function(response){
        $scope.gastoDetailModel = response.data;
    });

}]);