const Personas = require("./tico-falso/personas");
const Ubicacion = require("./tico-falso/ubicacion");

const ticoFalso = {
    personas: Personas,
    ubicacion: Ubicacion
}

console.log(ticoFalso.personas.tica);
module.exports = ticoFalso;