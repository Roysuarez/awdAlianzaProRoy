app.controller('homeController', ["$scope","homeFactory","productosFactory",function($scope,homeFactory,productosFactory){
    $scope.nuevoAlgo = {};
    $scope.imagenes = [{ id:1, imagen: './src/Home/1.jpg'},
                         { id:2, imagen: './src/Home/2.jpg'},
                         { id:3, imagen: './src/Home/3.jpg'},
                         { id:4, imagen: './src/Home/4.jpg'}
                    ];
    $scope.carouselIndex = 0;

    
    homeFactory.obtenerImagenes().then(function(response){
        $scope.image = response;
    });
    productosFactory.obtenerProductos().then(function(response){
        $scope.productos = response;
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