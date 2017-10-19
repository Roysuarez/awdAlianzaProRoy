var app = angular.module('AngularExample', ['ngRoute','ngCookies']);

app.config(['$qProvider','$routeProvider','$locationProvider', function($qProvider, $routeProvider, $locationProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $routeProvider
    .when('/naves', {
        templateUrl: './src/Naves/Naves.html',
        controller: 'navesController',
    })
    .when('/bases', {
        templateUrl: './src/Bases/Bases.html',
        controller: 'basesController',
    })
    .when('/descubrimientos', {
        templateUrl: './src/Descubrimientos/Descubrimientos.html',
        controller: 'descubrimientosController',    
    })
    .when('/bases/:id', {
        templateUrl: './src/Bases/basesDetail.html',
        controller: 'basesDetailController',
    })
    .otherwise( { redirectTo: "/" });;
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