app.controller("registroController",["$scope","registroService","clientesFactory", "$location", "$rootScope","md5",function($scope, registroService,clientesFactory, $location, $rootScope, md5){
 
    $scope.register = function() {
        $scope.dataLoading = true;
        $scope.user.password = md5.createHash($scope.user.password)
        $scope.user.role = "public";
        var email = $scope.user.email;

        registroService.Registro(email, function (response){
            if (response.success){
            clientesFactory.agregarCliente($scope.user)
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
            } else {
                 $scope.dataLoading = false;
                console.log("Error:"+response.message);
            }
        });

        
    }
 
}]);