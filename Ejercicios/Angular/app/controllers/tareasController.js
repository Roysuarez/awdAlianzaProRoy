app.controller('todoEnMemoria', ["$scope","abmService",function($scope,abmService){
    abmService.dameLosDescubrimientos().then(function(response){
        $scope.planetas = response.data;
    });
    $scope.nuevoPlaneta = {};
    $scope.agregarPlaneta = function(){
        var nuevoDesc = $scope.nuevoPlaneta;
        abmService.agregaDescubrimiento(nuevoDesc)
        $scope.nuevoPlaneta = {};
    }
    $scope.borrarPlaneta = function(planeta){
        abmService.borrarDescubrimiento(planeta)
    }
    $scope.editarPlaneta= function(planeta){
        abmService.editarDescubrimiento(planeta)
    }
    
}]);