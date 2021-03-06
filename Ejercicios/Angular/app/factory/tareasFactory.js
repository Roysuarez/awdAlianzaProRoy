 app.factory('abmFactory', ['$http','$q',function($http,$q){
    return{
        dameLosDescubrimientos:  function(){
        var deferred = $q.defer();
        $http({method: 'GET', url: 'http://localhost:3000/Descubrimientos'}).then
        (function (response) {
            deferred.resolve(response.data);
        }, function errorCallBack(response) {
            deferred.reject(response)
        }
    
        );
        return deferred.promise;
    },
        agregaUnDescubrimiento: function(nuevoDesc){
        var deferred = $q.defer();
        $http.post('http://localhost:3000/Descubrimientos', nuevoDesc).then(function(response){
                deferred.resolve(response.data);
            }, function errorCallback(response){
                deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        borrarUnDescubrimiento: function(planeta){
        var deferred = $q.defer();
        $http.delete("http://localhost:3000/Descubrimientos/"+planeta.id).then(function(response){
                deferred.resolve(response.data);
            }, function errorCallBack(response){
                deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        editarUnDescubrimiento: function(planeta){
        var deferred = $q.defer();
        $http.put("http://localhost:3000/Descubrimientos/"+planeta.id, planeta).then(function(response){
            deferred.resolve(response.data);
        }, function errorCallBack(response){
            deferred.reject(response);
        }
        );
        return deferred.promise;
    }
}
}]);