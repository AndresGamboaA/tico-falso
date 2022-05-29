import ticoFalso from "./src/tico-falso.js";

document.getElementById("nombre").innerText = ticoFalso.persona();
const provincia = ticoFalso.provincia();
document.getElementById("empresa").innerText = provincia;
document.getElementById("canton").innerText = ticoFalso.canton(provincia);