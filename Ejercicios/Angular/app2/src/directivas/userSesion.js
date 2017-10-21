app.directive('userSesion', [function() {
    return {
      restrict: 'E',
      templateUrl: './src/directivas/templates/userSesion.html',
     //replace:true,//si seleccionamos esta opcion tenemos que hacer que todo el html este adentro de un solo elemento.por ejemplo <div></div>
      link: function (scope,element)
      {
        $(element).css({'color' : 'blue', 'text-decoration' : 'underline', 'cursor':'pointer'});
        //Captura los eventos de disparo al cambiar la url y actualiza el valor del nombre del usuario
        scope.userSesionName =  scope.$root.globals ? scope.$root.globals.currentUser.username: false;
        scope.$on("$locationChangeStart", function (event, next, current) {
          scope.userSesionName =  scope.$root.globals ? scope.$root.globals.currentUser.username: false;
        });
      }
    };
}]);