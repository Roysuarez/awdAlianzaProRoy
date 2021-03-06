var app = angular.module("myApp",['ngRoute','ngCookies']);

app.constant('gastosCTEOptions', [{id: '1', name: 'Viajes'}, {id: '2', name: 'Facturas'},{id: '3', name: 'Comida'}]);
app.constant('gastosCTE', [{id: '0', option:'1',show:true,titulo: 'Francia'}, {id: '1', option:'2',show:true,titulo: 'Pagar OSE'}]);



/*ENRUTAMIENTO*/
app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'src/views/todo.html',
      controller: 'todoController',
      //controllerAs: 'todoController'
    })
    .when('/registro', {
        templateUrl: 'src/registro/register.html',
        controller: 'registroController',
    })
    .when('/login', {
        templateUrl: 'src/home/login.html',
        controller: 'homeController',
    })
    .when('/gastos', {
        templateUrl: 'src/gastos/gastos.html',
        controller: 'gastosController',
    })
    .when('/gastos/:id', {//mostrar tambien por id y titulo
        templateUrl: 'src/gastos/gastoDetail.html',
        controller: 'gastoDetailController',
    })
    .when('/productos', {
        templateUrl: 'src/productos/productos.html',
        controller: 'productosController',
    })
    .when('/usuarios', {
        templateUrl: 'src/users/usuarios.html',
        controller: 'usuariosController',
    })
    .otherwise( { redirectTo: "/" });;
  
    // configure html5 to get links working on jsfiddle
    //$locationProvider.html5Mode(true);
  }]);

  //Autenticacaion
  app.run(['$rootScope', '$location', '$cookies', '$http',function ($rootScope, $location, $cookies, $http) {
      // mantenerse logueado luego de resfrescar la pagina
      $rootScope.globals = $cookies.getObject('globals') || {};//Obtengo los valore de las cookies si hay
      if ($rootScope.globals.currentUser) {
          $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
      }

      $rootScope.$on('$locationChangeStart', function (event, next, current) {
          // redirect a la pagina de login sino no hay usuario logueado
         /* if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
              $location.path('/login');
          }
          */
            // redirect a la pagina de login sino no hay usuario logueado y no tiene acceso a determinadas paginas
            var restrictedPage = $.inArray($location.path(), ['/login', '/registro']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
            //solo podra acceder al resto de las vistas si hay usuario logueado sino solo vera registro y login.
      });
      

  }]);