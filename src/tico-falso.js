import nombre_hombres from "./datos/nombre_hombres.js";
import nombre_mujeres from "./datos/nombre_mujeres.js";
import apellidos from "./datos/apellidos.js";
import {nombresProvincias, provincias} from "./datos/provincias.js";


class TicoFalso {
    constructor() {}

    tico() {
        return `${this.nombreHombre()} ${this.nombreHombre()} ${this.apellido()} ${this.apellido()}`
    }
    
    persona() {
        return Math.random() > 0.5 ? this.tico() : this.tica();
    }

    cedula(provincia) {
        const p_valor = nombresProvincias.indexOf(provincia) + 1;
        return Number(p_valor+String(Math.floor(Math.random() * (99999999 - 11111111) ) + 99999999));
    }

    tica() {
        return `${this.nombreMujer()} ${this.nombreMujer()} ${this.apellido()} ${this.apellido()}`
    }

    nombreHombre() {
        return aleatorio(nombre_hombres);
    }

    nombreMujer() {
        return aleatorio(nombre_mujeres);
    }

    apellido() {
        return aleatorio(apellidos);
    }

    provincia() {
        return aleatorio(provincias).nombre;
    }

    canton(nombreProvincia=null) {
        if (nombreProvincia) {
            const provincia = provincias.find(provincia => provincia.nombre == nombreProvincia);
            return aleatorio(provincia.cantones).nombre;
        }
        const provincia = aleatorio(provincias)
        return aleatorio(provincia.cantones).nombre;
    }

    distrito(nombreProvincia=null,nombreCanton=null) {
        let provincia = nombreProvincia?
            provincias.find(item => item.nombre == nombreProvincia):
            aleatorio(provincias);

        let canton = nombreCanton?
            provincia.cantones.find(item => item.nombre == nombreCanton):
            aleatorio(provincia.cantones);

        return aleatorio(canton.distritos);
    }

    codigoPostal() {
        return Math.floor(Math.random() * (70605 - 10101) ) + 10101;
    }

    direccion(pueblo=null) {
        pueblo = pueblo?pueblo:this.distrito();
        return `${aleatorio([
            'Cien',
            'Doscientos',
            'Trescientos',
            'Cuatrocientos',
            'Quinientos',
            'Seiscientos',
            'Setecientos',
            'Ochocientos',
            'Novecientos'
        ])} metros ${aleatorio([
            'sur',
            'norte',
            'este',
            'oeste'
        ])} ${aleatorio([
            'de la iglesia católica',
            'de la iglesia evangélica',
            'de la pulpería',
            'del supermercado ',
            'de la escuela pública',
            'del aeropuerto',
            'de la estación de bomberos',
            'del gimnasio',
            'de la carcel',
            'de la estación de policia',
            'del colegio',
            'del colegio profesional',
            'del salón comunal',
            'del Ebais',
            'del parque',
            'de la plaza de futbol'
        ])} ${pueblo?`de ${pueblo}`:""}.`;
    }
}

function aleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const ticoFalso = new TicoFalso();
export default ticoFalso;