import ticoFalso from "./src/tico-falso.js";

document.getElementById("nombre").innerText = ticoFalso.persona();
const provincia = ticoFalso.provincia();
const canton = ticoFalso.canton(provincia);
const distrito = ticoFalso.distrito(provincia, canton);
document.getElementById("cedula").innerText = ticoFalso.cedula(provincia);
document.getElementById("provincia").innerText = provincia;
document.getElementById("canton").innerText = canton;
document.getElementById("distrito").innerText = distrito;
document.getElementById("direccion").innerText = ticoFalso.direccion(distrito);
document.getElementById("codigo").innerText = ticoFalso.codigoPostal();