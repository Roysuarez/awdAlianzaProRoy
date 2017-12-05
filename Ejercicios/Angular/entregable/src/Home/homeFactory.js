app.factory('homeFactory', ['$http','$q',function($http,$q){
    return{
        obtenerImagenes:  function(){
        var deferred = $q.defer();
        $http({method: 'GET', url: 'http://localhost:3000/Imagenes'}).then
        (function (response) {
            deferred.resolve(response.data);
        }, function errorCallBack(response) {
            deferred.reject(response)
        }
    
        );
        return deferred.promise;
    }
}
}]);