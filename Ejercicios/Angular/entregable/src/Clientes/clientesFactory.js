app.factory('clientesFactory', ['$http','$q',function($http,$q){
    return{
        obtenerClientes:  function(){
        var deferred = $q.defer();
        $http({method: 'GET', url: 'http://localhost:3000/Clientes'}).then
        (function (response) {
            deferred.resolve(response.data);
        }, function errorCallBack(response) {
            deferred.reject(response)
        }
    
        );
        return deferred.promise;
    },
        agregarCliente: function(nuevoCliente){
        var deferred = $q.defer();
        $http.post('http://localhost:3000/Clientes', nuevoCliente).then(function(response){
                deferred.resolve(response.data);
            }, function errorCallback(response){
                deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        borrarCliente: function(cliente){
        var deferred = $q.defer();
        $http.delete("http://localhost:3000/Clientes/"+cliente.id).then(function(response){
                deferred.resolve(response.data);
            }, function errorCallBack(response){
                deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        editarCliente: function(cliente){
        var deferred = $q.defer();
        $http.put("http://localhost:3000/Clientes/"+cliente.id, cliente).then(function(response){
            deferred.resolve(response.data);
        }, function errorCallBack(response){
            deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        detallesCliente: function(clienteId){
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