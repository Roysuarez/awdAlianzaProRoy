app.directive('backButton', function() {
    return {
      template: '<div ng-click="back()">Back</div>',
      link: function (scope,element)
      {
      //element hace referencia al div que contiene la directiva
      //en la función link añadimos algo de css con jQuery
      $(element).css({'color' : 'blue', 'text-decoration' : 'underline', 'cursor':'pointer'});
      //y creamos una variable de alcance con scope que contiene un array
      //scope.values = ["simple","directiva","con","clases","en","angularjs"];
      scope.back = function(){
            console.log(scope.tituloDirectiva);
           history.back()
       }
      }
    };
});