app.controller("registroController",["$scope","UsuarioService", "$location", "$rootScope",function($scope, UsuarioService, $location, $rootScope){
 
    $scope.register = function() {
        $scope.dataLoading = true;
        UsuarioService.dbPostUsuario($scope.user)
            .then(function (response) {
                if (response) {
                    $location.path('/login');
                } else {s
                    $scope.dataLoading = false;
                }
            }, function errorCallback(response){
                $scope.dataLoading = false;
                console.log("Error:"+response.status);
                //podriamos utilizar una libreria de alertas apra angular como 
                //https://www.npmjs.com/package/angular-ui-notification
            });
    }
 
}]);