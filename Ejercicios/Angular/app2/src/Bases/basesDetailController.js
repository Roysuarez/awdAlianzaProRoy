app.controller("basesDetailController",["$scope","basesFactory","$routeParams",function($scope,basesFactory,$routeParams){
    $scope.basesDetailModel={};
    basesFactory.dbGetBasesDetail($routeParams.id).then(function(response){
        $scope.basesDetailModel = response;
    });

}]);