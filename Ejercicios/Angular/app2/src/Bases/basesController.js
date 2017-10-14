app.controller('basesController', ["$scope","basesFactory",function($scope,basesFactory){
    $scope.nuevaBase = {};
    basesFactory.dameLasBases().then(function(response){
        $scope.bases = response;
    });
    

    $scope.agregarBase = function(){
        var nuevaBase = $scope.nuevaBase;
        basesFactory.agregaUnaBase(nuevaBase).then(function(response){
        $scope.nuevaBase = {};
        $scope.bases.push(response);
        })
    };

    $scope.borrarBase = function(base){
        basesFactory.borrarUnaBase(base).then(function(response){
        var index = $scope.bases.indexOf(base);
        $scope.bases.splice(index, 1);
    })
    };

    $scope.editarBase= function(base){
        if(base.editar){
            basesFactory.editarUnaBase(base)
            base.editar = false;
        }else{
            base.editar = true;
        }
    };
    
}]);