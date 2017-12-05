var app = angular.module('AngularEntregable', ['ngRoute','ngCookies','angular-md5','angular-carousel','ngFileUpload']);

app.config(['$qProvider','$routeProvider','$locationProvider', function($qProvider, $routeProvider, $locationProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $routeProvider
    .when('/productos', {
        templateUrl: './src/Productos/Productos.html',
        controller: 'productosController',
    })
    .when('/clientes', {
        templateUrl: './src/Clientes/Clientes.html',
        controller: 'clientesController',
    })
    .when('/registro', {
        templateUrl: 'src/Registro/Registro.html',
        controller: 'registroController',
    })
    .when('/login', {
        templateUrl: 'src/Login/Login.html',
        controller: 'loginController',
    })
    .when('/', {
        templateUrl: './src/Home/Home.html',
        controller: 'homeController',    
    })
    .when('/mantenimiento', {
        templateUrl: './src/Mantenimiento/Mantenimiento.html',
        controller: 'mantenimientoController',
    })
    .otherwise( { redirectTo: "/" });;
}]);

//Autenticacacion
app.run(['$rootScope', '$location', '$cookies', '$http',function ($rootScope, $location, $cookies, $http) {
    // mantenerse logueado luego de resfrescar la pagina
    $rootScope.globals = $cookies.getObject('globals') || false;    //Obtengo los valores de las cookies si hay
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; 
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect a la pagina de login sino no hay usuario logueado y no tiene acceso a determinadas paginas
        var restrictedPage = $.inArray($location.path(), ['/','/login', '/registro']) === -1;
        var loggedIn = $rootScope.globals ? $rootScope.globals.currentUser : false;
        var userRole = $rootScope.globals ? $rootScope.globals.currentUser.userRole : false;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
        if (userRole == 'admin' && loggedIn) {        
                $.inArray($location.path(), ['/mantenimiento','/productos', '/clientes',]);
                //define que solo puede ver esta vista mientras el rol sea "admin"
        }
        if (loggedIn && userRole != 'admin') {
            $location.path('/');
        }
        //solo podra acceder al resto de las vistas si hay usuario logueado sino solo vera registro, login y home.
    });
    

}]);