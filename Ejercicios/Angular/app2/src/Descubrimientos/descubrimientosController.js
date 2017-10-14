app.controller('descubrimientosController', ["$scope","descubrimientosFactory",function($scope,descubrimientosFactory){
    $scope.nuevoPlaneta = {};
    descubrimientosFactory.dameLosDescubrimientos().then(function(response){
        $scope.planetas = response;
    });
    

    $scope.agregarPlaneta = function(){
        var nuevoDesc = $scope.nuevoPlaneta;
        descubrimientosFactory.agregaUnDescubrimiento(nuevoDesc).then(function(response){
        $scope.nuevoPlaneta = {};
        $scope.planetas.push(response);
        })
    };

    $scope.borrarPlaneta = function(planeta){
        descubrimientosFactory.borrarUnDescubrimiento(planeta).then(function(response){
        var index = $scope.planetas.indexOf(planeta);
        $scope.planetas.splice(index, 1);
    })
    };

    $scope.editarPlaneta= function(planeta){
        if(planeta.editar){
            descubrimientosFactory.editarUnDescubrimiento(planeta)
            planeta.editar = false;
        }else{
            planeta.editar = true;
        }
    };
    
}]);