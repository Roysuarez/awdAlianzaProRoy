app.controller('navesController', ["$scope","navesFactory",function($scope,navesFactory){
    $scope.nuevoPlaneta = {};
    navesFactory.dameLosDescubrimientos().then(function(response){
        $scope.planetas = response;
    });
    

    $scope.agregarPlaneta = function(){
        var nuevoDesc = $scope.nuevoPlaneta;
        navesFactory.agregaUnDescubrimiento(nuevoDesc).then(function(response){
        $scope.nuevoPlaneta = {};
        $scope.planetas.push(response);
        })
    };

    $scope.borrarPlaneta = function(planeta){
        navesFactory.borrarUnDescubrimiento(planeta).then(function(response){
        var index = $scope.planetas.indexOf(planeta);
        $scope.planetas.splice(index, 1);
    })
    };

    $scope.editarPlaneta= function(planeta){
        if(planeta.editar){
            navesFactory.editarUnDescubrimiento(planeta)
            planeta.editar = false;
        }else{
            planeta.editar = true;
        }
    };
    
}]);