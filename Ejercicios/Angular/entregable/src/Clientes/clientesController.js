app.controller('clientesController', ["$scope","clientesFactory",function($scope,clientesFactory){
    $scope.nuevoCliente = {};
    clientesFactory.obtenerClientes().then(function(response){
        $scope.clientes = response;
    });
    

    $scope.agregarCliente = function(){
        var nuevoCliente = $scope.nuevoCliente;
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
        if(cliente.editar){
            clientesFactory.editarCliente(cliente)
            cliente.editar = false;
        }else{
            cliente.editar = true;
        }
    };
    
}]);