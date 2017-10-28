app.controller('navesController', ["$scope","navesFactory",function($scope,navesFactory){
    $scope.nuevoPlaneta = {};
    $scope.imagenes = [{ id:1, imagen: './src/Naves/nave1.png'},
                         { id:2, imagen: './src/Naves/nave2.png'},
                         { id:3, imagen: './src/Naves/nave3.png'},
                         { id:4, imagen: './src/Naves/nave4.png'},
                         { id:5, imagen: './src/Naves/nave5.png'},
                         { id:6, imagen: './src/Naves/nave6.png'}
                    ];
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