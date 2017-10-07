app.controller('todoEnMemoria', ["$scope","abmFactory","abmService",function($scope,abmFactory,abmService){
    $scope.nuevoPlaneta = {};
    abmFactory.dameLosDescubrimientos().then(function(response){
        $scope.planetas = response;
    });
    

    $scope.agregarPlaneta = function(){
        var nuevoDesc = $scope.nuevoPlaneta;
        abmFactory.agregaUnDescubrimiento(nuevoDesc).then(function(response){
        $scope.nuevoPlaneta = {};
        $scope.planetas.push(response);
        })
    };

    $scope.borrarPlaneta = function(planeta){
        abmFactory.borrarUnDescubrimiento(planeta).then(function(response){
        var index = $scope.planetas.indexOf(planeta);
        $scope.planetas.splice(index, 1);
    })
    };

    $scope.editarPlaneta= function(planeta){
        if(planeta.editar){
            abmFactory.editarUnDescubrimiento(planeta)
            planeta.editar = false;
        }else{
            planeta.editar = true;
        }
    };
    
}]);