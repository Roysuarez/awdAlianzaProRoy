app.directive('test', function() {
    return {
      restrict: 'E',  
      scope:{
          data: '@',//text binding // = Two way binding no necesita {{}} en el html donde se hace el mapeo // & one binding
          desdedirectiva: '='
        },
     templateUrl: './src/directivas/templates/test.html',
     //replace:true,//si seleccionamos esta opcion tenemos que hacer que todo el html este adentro de un solo elemento.por ejemplo <div></div>
      controller: function($scope)
      {
        console.log("Acaaa:",$scope.data);
     
        $scope.mapeoValorDirectiva = 'hola';
      }
    };
});