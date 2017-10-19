app.controller("homeController",["$scope","$location", "AuthenticationService",function($scope, $location, AuthenticationService){

    $scope.login = function() {
        $scope.dataLoading = true;
        AuthenticationService.Login($scope.username, $scope.password, function (response) {
            if (response.success) {
                AuthenticationService.SetCredentials($scope.username, $scope.password);
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