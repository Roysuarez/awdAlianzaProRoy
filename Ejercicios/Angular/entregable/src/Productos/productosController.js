app.controller('productosController', ['$scope', '$location', "Upload", "$timeout", 'productosFactory',function($scope, $location, Upload, $timeout, productosFactory) {
    productosFactory.obtenerProductos().then(function(response){
        $scope.productos = response;
    });
    

    $scope.agregarProducto = function(){
        $scope.dataLoading = true;
        $scope.producto.Imagen = $scope.imagenProducto ? $scope.imagenProducto : '';
        var nuevoProducto = $scope.producto;
        productosFactory.agregarProducto(nuevoProducto).then(function(response){
        $scope.nuevoProducto = {};
        $scope.productos.push(response);
        })
    };

    $scope.borrarProducto = function(producto){
        productosFactory.borrarProducto(producto).then(function(response){
        var index = $scope.productos.indexOf(producto);
        $scope.productos.splice(index, 1);
    })
    };

    $scope.editarProducto= function(producto){
            productosFactory.editarProducto(producto)
    };
    
    $scope.$watch('files', function() {
        $scope.upload($scope.files);
    });
    $scope.upload = function(files) {

        if (files) {
            //Metodo para transformar objectos blob a Base64
            Upload.base64DataUrl(files).then(function(urls) {
                $scope.imagenProducto = urls[0];
            });
        }

    };
}]);