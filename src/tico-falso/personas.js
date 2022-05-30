const nombresHombres = require("./datos/nombre_hombres");
const nombresMujeres = require("./datos/nombre_mujeres");
const apellidos = require("./datos/apellidos");
const Utils = require("./utils");

var Personas = {}

Personas.nombresHombres = Utils.aleatorio(nombresHombres);
Personas.nombresMujeres = Utils.aleatorio(nombresMujeres);
Personas.apellido = Utils.aleatorio(apellidos);

Personas.tico = function() {
    return `${Utils.aleatorio(nombresHombres)} ${Utils.aleatorio(nombresHombres)} ${Utils.aleatorio(apellidos)} ${Utils.aleatorio(apellidos)}`;
}();

Personas.tica = function() {
    return `${Utils.aleatorio(nombresMujeres)} ${Utils.aleatorio(nombresMujeres)} ${Utils.aleatorio(apellidos)} ${Utils.aleatorio(apellidos)}`;
}();

Personas.persona = function() {
    return Math.random() > 0.5 ? Personas.tico : Personas.tica;
}();

Personas.cedula = function(provincia=null) {
    var p_valor = Utils.aleatorio([0,1,2,3,4,5,6,7,8,9]);
    if (provincia){
        p_valor = [  
            'San José',
            'Alajuela',
            'Cartago',
            'Heredia',
            'Guanacaste',
            'Puntarenas',
            'Limón'].indexOf(provincia) + 1;
    }
    if (p_valor == 0) {
        throw new Error("Provincia no válida. ¿La escribio bien?");
    }
    return Number(p_valor+String(Math.floor(Math.random() * (99999999 - 11111111) ) + 99999999));
};

module.exports = Personas;