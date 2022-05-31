import provincias from "./datos/provincias";
import senales from "./datos/senales";
import Utils from "./utils";

var Ubicacion = {};

Ubicacion.provincia = function() {
    return Utils.aleatorio(provincias).nombre;
};

Ubicacion.canton = function() {
    const provincia = Utils.aleatorio(provincias)
    return Utils.aleatorio(provincia.cantones).nombre;
};

Ubicacion.cantonDe = function(nombreProvincia) {
    const provincia = provincias.find(provincia => provincia.nombre == nombreProvincia);
    return Utils.aleatorio(provincia.cantones).nombre;
};

Ubicacion.distrito = function() {
    let provincia = Utils.aleatorio(provincias);
    let canton = Utils.aleatorio(provincia.cantones);
    return Utils.aleatorio(canton.distritos);
};

Ubicacion.distritoDe = function(nombreProvincia,nombreCanton=null) {
    let provincia = provincias.find(item => item.nombre == nombreProvincia);

    let canton = nombreCanton?
        provincia.cantones.find(item => item.nombre == nombreCanton):
        Utils.aleatorio(provincia.cantones);

    return Utils.aleatorio(canton.distritos);
};

Ubicacion.codigoPostal = function() {
    return Math.floor(Math.random() * (70605 - 10101) ) + 10101;
};

Ubicacion.direccionDe = function(pueblo=null) {
    return `${Utils.aleatorio(senales.metros)} metros ${Utils.aleatorio(senales.puntosCardinales)} ${Utils.aleatorio(senales.puntosReferencia)} de ${pueblo}.`;
}

Ubicacion.direccion = function() {
    return `${Utils.aleatorio(senales.metros)} metros ${Utils.aleatorio(senales.puntosCardinales)} ${Utils.aleatorio(senales.puntosReferencia)} de ${Ubicacion.distrito()}.`;
};

export default Ubicacion;