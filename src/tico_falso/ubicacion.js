import provincias from "./datos/provincias";
import senales from "./datos/senales";
import Utils from "./utils";

var Ubicacion = {};

Ubicacion.provincia = function() {
    return Utils.aleatorio(provincias).nombre;
};

Ubicacion.canton = function(nombreProvincia=null) {
    const provincia = nombreProvincia?
        provincias.find(provincia => provincia.nombre == nombreProvincia):
        Utils.aleatorio(provincias);
    return Utils.aleatorio(provincia.cantones).nombre;
};

Ubicacion.distrito = function(nombreProvincia,nombreCanton=null) {
    let provincia = nombreProvincia?
        provincias.find(item => item.nombre == nombreProvincia):
        Utils.aleatorio(provincias);

    let canton = nombreCanton?
        provincia.cantones.find(item => item.nombre == nombreCanton):
        Utils.aleatorio(provincia.cantones);

    return Utils.aleatorio(canton.distritos);
};

Ubicacion.codigoPostal = function() {
    return Math.floor(Math.random() * (70605 - 10101) ) + 10101;
};

Ubicacion.direccion = function(pueblo=null) {
    return `${Utils.aleatorio(senales.metros)} metros ${Utils.aleatorio(senales.puntosCardinales)} ${Utils.aleatorio(senales.puntosReferencia)} de ${pueblo?pueblo:Ubicacion.distrito()}.`;
}

export default Ubicacion;