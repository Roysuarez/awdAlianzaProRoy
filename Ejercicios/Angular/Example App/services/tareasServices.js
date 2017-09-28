app.service("abmService", function(Descubrimientos){
    this.dameLosDescubrimientos = function(){
        return Descubrimientos;
    }
    this.agregaDescubrimiento = function(nuevoDescubrimiento){
        Descubrimientos.push(nuevoDescubrimiento);
        return Descubrimientos; 
    }
    this.borrarDescubrimiento = function(planeta){
        var index = Descubrimientos.indexOf(planeta)
        Descubrimientos.splice(planeta, 1);
        return Descubrimientos;
    }
    this.editarDescubrimiento = function(planeta){
        if(!planeta.editar){
            planeta.editar = true;
        }else if(planeta.editar){
            planeta.editar = false;
        }
        return Descubrimientos;
    }
});