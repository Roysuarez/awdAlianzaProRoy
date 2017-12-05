app.controller('clientesController', ["$scope","$location","Upload","$timeout","clientesFactory",function($scope,$location,Upload,$timeout,clientesFactory){
    clientesFactory.obtenerClientes().then(function(response){
        $scope.clientes = response;
    });
    

    $scope.agregarCliente = function(){
        $scope.dataLoading = true;
        $scope.cliente.foto = $scope.imagenCliente ? $scope.imagenCliente : '';
        var nuevoCliente = $scope.cliente;
        clientesFactory.agregarCliente(nuevoCliente).then(function(response){
        $scope.nuevoCliente = {};
        $scope.clientes.push(response);
        })
    };

    $scope.borrarCliente = function(cliente){
        clientesFactory.borrarCliente(cliente).then(function(response){
        var index = $scope.clientes.indexOf(clientes);
        $scope.clientes.splice(index, 1);
    })
    };

    $scope.editarCliente= function(cliente){
            clientesFactory.editarCliente(cliente)
    };
    
    $scope.$watch('files', function() {
        $scope.upload($scope.files);
    });
    $scope.upload = function(files) {

        if (files) {
            //Metodo para transformar objectos blob a Base64
            Upload.base64DataUrl(files).then(function(urls) {
                $scope.imagenCliente = urls[0];
            });
        }

    };
}]);