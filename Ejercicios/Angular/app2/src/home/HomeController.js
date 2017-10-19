app.controller("homeController",["$scope","$location", "AuthenticationService","md5",function($scope, $location, AuthenticationService,md5){

    $scope.login = function() {
        $scope.dataLoading = true;
        var passwordHash = md5.createHash($scope.password);
        AuthenticationService.Login($scope.username, passwordHash, function (response) {
            if (response.success) {
                AuthenticationService.SetCredentials($scope.username, passwordHash);
                $location.path('/');
            } else {
                $scope.dataLoading = false;
                console.log("Error:"+response.message);
            }
        });
    };
    $scope.logout = function() {
        AuthenticationService.ClearCredentials();
        $location.path('/login');
    }
}]);