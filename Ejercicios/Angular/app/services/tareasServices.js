app.service("abmService", ['$http', function($http){
    var url = "http://localhost:3000/Descubrimientos";
    this.dameLosDescubrimientos = function(){
        return $http.get('http://localhost:3000/Descubrimientos')
    
    }
    this.agregaDescubrimiento = function(nuevoDescubrimiento){
        return $http.post("http://localhost:3000/Descubrimientos",nuevoDescubrimiento)
    }
    this.borrarDescubrimiento = function(planeta){
        var objeto = "?texto=" + planeta.texto;
        url = url + objeto;
        return $http.delete(url)
    }
    this.editarDescubrimiento = function(planeta){
        if(!planeta.editar){
            planeta.editar = true;
        }else if(planeta.editar){
            planeta.editar = false;
        }
        return $http.post("http://localhost:3000/Descubrimientos", planeta);
    }
}]);