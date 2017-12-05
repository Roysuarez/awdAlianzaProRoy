app.controller("loginController",["$scope","$location", "loginService","md5","$rootScope",function($scope, $location, loginService,md5,$rootScope){
    $scope.displayLogout = $rootScope.globals?true:false;

    $scope.$watch("globals",function() {
        $scope.displayLogout = $rootScope.globals?true:false;
    });

    $scope.login = function() {
        $scope.dataLoading = true;
        var passwordHash = md5.createHash($scope.password);
        loginService.Login($scope.email, passwordHash, function (response) {
            if (response.success) {
                loginService.SetCredentials($scope.email, passwordHash, response.userRole, response.nombre);
                $scope.displayLogout = $rootScope.globals?true:false;
                $location.path('/');
            } else {
                $scope.dataLoading = false;
                console.log("Error:"+response.message);
            }
        });
    };
    $scope.logout = function() {
        loginService.ClearCredentials();
        $location.path('/login');
    }
}]);