 app.factory('pilotosFactory', ['$http','$q',function($http,$q){
    return{
        dameLosDescubrimientos:  function(){
        var deferred = $q.defer();
        $http({method: 'GET', url: 'http://localhost:3000/Pilotos'}).then
        (function (response) {
            deferred.resolve(response.data);
        }, function errorCallBack(response) {
            deferred.reject(response)
        }
    
        );
        return deferred.promise;
    },
    dbGetPiloto: function(piloto){
        var deferred = $q.defer();
        $http({method: 'GET', url: 'http://localhost:3000/Pilotos/?username='+piloto}).then(function (response) {
            //success
            deferred.resolve(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
                deferred.reject(response); 
                }
            );
        return  deferred.promise;
    },
        agregaUnDescubrimiento: function(nuevoDesc){
        var deferred = $q.defer();
        $http.post('http://localhost:3000/Pilotos', nuevoDesc).then(function(response){
                deferred.resolve(response.data);
            }, function errorCallback(response){
                deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        borrarUnDescubrimiento: function(planeta){
        var deferred = $q.defer();
        $http.delete("http://localhost:3000/Pilotos/"+planeta.id).then(function(response){
                deferred.resolve(response.data);
            }, function errorCallBack(response){
                deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        editarUnDescubrimiento: function(planeta){
        var deferred = $q.defer();
        $http.put("http://localhost:3000/Pilotos/"+planeta.id, planeta).then(function(response){
            deferred.resolve(response.data);
        }, function errorCallBack(response){
            deferred.reject(response);
        }
        );
        return deferred.promise;
    }
}
}]);