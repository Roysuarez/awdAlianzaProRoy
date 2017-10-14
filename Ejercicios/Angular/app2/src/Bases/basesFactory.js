 app.factory('basesFactory', ['$http','$q',function($http,$q){
    return{
        dameLasBases:  function(){
        var deferred = $q.defer();
        $http({method: 'GET', url: 'http://localhost:3000/Bases'}).then
        (function (response) {
            deferred.resolve(response.data);
        }, function errorCallBack(response) {
            deferred.reject(response)
        }
    
        );
        return deferred.promise;
    },
        agregaUnaBase: function(nuevoDesc){
        var deferred = $q.defer();
        $http.post('http://localhost:3000/Bases', nuevoDesc).then(function(response){
                deferred.resolve(response.data);
            }, function errorCallback(response){
                deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        borrarUnaBase: function(planeta){
        var deferred = $q.defer();
        $http.delete("http://localhost:3000/Bases/"+planeta.id).then(function(response){
                deferred.resolve(response.data);
            }, function errorCallBack(response){
                deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        editarUnaBase: function(planeta){
        var deferred = $q.defer();
        $http.put("http://localhost:3000/Bases/"+planeta.id, planeta).then(function(response){
            deferred.resolve(response.data);
        }, function errorCallBack(response){
            deferred.reject(response);
            }
        );
        return deferred.promise;
    },
        dbGetBasesDetail: function(baseId){
        var deferred = $q.defer();
        $http.get("http://localhost:3000/Bases/"+baseId).then(function(response){
            deferred.resolve(response.data);
        }, function errorCallBack(response){
            deferred.reject(response);
            }
        );
        return deferred.promise;
    }
}
}]);