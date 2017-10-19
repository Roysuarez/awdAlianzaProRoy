app.controller('pilotosController', ["$scope","pilotosFactory",function($scope,pilotosFactory){
    $scope.nuevoPlaneta = {};
    pilotosFactory.dameLosDescubrimientos().then(function(response){
        $scope.planetas = response;
    });
    

    $scope.agregarPlaneta = function(){
        var nuevoDesc = $scope.nuevoPlaneta;
        pilotosFactory.agregaUnDescubrimiento(nuevoDesc).then(function(response){
        $scope.nuevoPlaneta = {};
        $scope.planetas.push(response);
        })
    };

    $scope.borrarPlaneta = function(planeta){
        pilotosFactory.borrarUnDescubrimiento(planeta).then(function(response){
        var index = $scope.planetas.indexOf(planeta);
        $scope.planetas.splice(index, 1);
    })
    };

    $scope.editarPlaneta= function(planeta){
        if(planeta.editar){
            pilotosFactory.editarUnDescubrimiento(planeta)
            planeta.editar = false;
        }else{
            planeta.editar = true;
        }
    };
    
}]);