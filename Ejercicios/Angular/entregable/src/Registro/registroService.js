app.service('registroService' ,['$http', '$cookies', 'clientesFactory',function($http, $cookies, clientesFactory)
{
this.Registro = function(email, callback) {
    clientesFactory.confirmarEmail(email)
        .then(function (user) {
            if (user = []) {
                response = { success: true};
            }else if(uMail[0].email != email){
                response = { success: true};
            } else {
                response = { success: false, message: 'Email ya registrado en la base de datos' };
            } 
            callback(response);
        }, function errorCallback(responseServer){
            response = { success: false, message: 'Error de servidor:'+responseServer.status };
            callback(response);
        });
}
}]);