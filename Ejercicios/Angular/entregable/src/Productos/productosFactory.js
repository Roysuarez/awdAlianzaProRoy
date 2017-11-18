app.factory('productosFactory', ['$http','$q',function($http,$q){
    return{
        obtenerProductos:  function(){
        var deferred = $q.defer();
        $http({method: 'GET', url: 'http://localhost:3000/Productos'}).then
        (function (response) {
            deferred.resolve(response.data);
        }, function errorCallBack(response) {
            deferred.reject(response)
        }
    
        );
        return deferred.promise;
    },
        agregarProducto: function(nuevoProducto){
        var deferred = $q.defer();
        $http.post('http://localhost:3000/Productos', nuevoProducto).then(function(response){
                deferred.resolve(response.data);
            }, function errorCallback(response){
                deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        borrarProducto: function(cliente){
        var deferred = $q.defer();
        $http.delete("http://localhost:3000/Productos/"+cliente.id).then(function(response){
                deferred.resolve(response.data);
            }, function errorCallBack(response){
                deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        editarProducto: function(cliente){
        var deferred = $q.defer();
        $http.put("http://localhost:3000/Productos/"+cliente.id, cliente).then(function(response){
            deferred.resolve(response.data);
        }, function errorCallBack(response){
            deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        detallesProducto: function(clienteId){
        var deferred = $q.defer();
        $http.get("http://localhost:3000/Clientes/"+clienteId).then(function(response){
            deferred.resolve(response.data);
        }, function errorCallBack(response){
            deferred.reject(response);
            }
        );
        return deferred.promise;
    }
}
}]);