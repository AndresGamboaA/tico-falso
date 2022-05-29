import nombre_hombres from "./datos/nombre_hombres.js";
import nombre_mujeres from "./datos/nombre_mujeres.js";
import apellidos from "./datos/apellidos.js";
import empresas from './datos/empresas.js';
import provincias from "./datos/provincias.js";


class TicoFalso {
    constructor() {}

    tico() {
        return `${this.nombreHombre()} ${this.nombreHombre()} ${this.apellido()} ${this.apellido()}`
    }

    tica() {
        return `${this.nombreMujer()} ${this.nombreMujer()} ${this.apellido()} ${this.apellido()}`
    }

    persona() {
        return getRndIndex(2)==0 ? this.tico() : this.tica();
    }

    nombreHombre() {
        return nombre_hombres[getRndIndex(nombre_hombres.length)]
    }

    nombreMujer() {
        return nombre_mujeres[getRndIndex(nombre_mujeres.length)]
    }

    apellido() {
        return apellidos[getRndIndex(apellidos.length)]
    }

    provincia() {
        return provincias[getRndIndex(provincias.length)].nombre;
    }

    canton(nombreProvincia=null) {
        if (nombreProvincia) {
            const provincia = provincias.find(provincia => provincia.nombre == nombreProvincia);
            return provincia.cantones[getRndIndex(provincia.cantones.length)].nombre;
        }
        const provincia = provincias[getRndIndex(provincias.length)]
        return provincia.cantones[getRndIndex(provincia_selec.cantones.length)].nombre;
    }

    distrito(nombreProvincia=null,nombreCanton=null) {
        const provincia = provincias[getRndIndex(provincias.length)]
        return provincia.cantones[getRndIndex(provincia_selec.cantones.length)].nombre;
    }

    empresa() {
        return empresas.ferreterias[getRndIndex(empresas.ferreterias.length)]
    }

    direccion() {
        return "400 mts sur Iglesia Catolica..."
    }
}

function getRndIndex(max) {
    return Math.floor(Math.random() * max );
}

const ticoFalso = new TicoFalso();
export default ticoFalso;