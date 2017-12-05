app.controller('mantenimientoController', ["$scope","mantenimientoFactory","Upload",function($scope,mantenimientoFactory,Upload){

    mantenimientoFactory.obtenerMantenimiento().then(function(response){
        $scope.mantenimiento = response;
    });
    
    $scope.editarMantenimiento= function(mantenimiento){
        $scope.dataLoading = true;
        $scope.mantenimiento.logo = $scope.imagenMantenimiento ? $scope.imagenMantenimiento : '';
        nuevoMantenimiento = $scope.mantenimiento;
        mantenimientoFactory.editarMantenimiento(nuevoMantenimiento)
    };

    $scope.$watch('files', function() {
        $scope.upload($scope.files);
    });
    $scope.upload = function(files) {

        if (files) {
            //Metodo para transformar objectos blob a Base64
            Upload.base64DataUrl(files).then(function(urls) {
                $scope.imagenMantenimiento = urls[0];
            });
        }

    };
}]);