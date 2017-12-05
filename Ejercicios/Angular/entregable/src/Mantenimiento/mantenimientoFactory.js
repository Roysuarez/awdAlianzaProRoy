app.factory('mantenimientoFactory', ['$http','$q',function($http,$q){
    return{
        obtenerMantenimiento:  function(){
        var deferred = $q.defer();
        $http({method: 'GET', url: 'http://localhost:3000/Mantenimiento'}).then
        (function (response) {
            deferred.resolve(response.data);
        }, function errorCallBack(response) {
            deferred.reject(response)
        }
    
        );
        return deferred.promise;
    },
        editarMantenimiento: function(mantenimiento){
        var deferred = $q.defer();
        $http.put("http://localhost:3000/Mantenimiento/"+mantenimiento.id, mantenimiento).then(function(response){
            deferred.resolve(response.data);
        }, function errorCallBack(response){
            deferred.reject(response);
            }
        );
        return deferred.promise;
    }
}
}]);