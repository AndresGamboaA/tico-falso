import ticoFalso from "./src/tico-falso.js";

const tabla = document.getElementById("tabla");

for (let i=0; i<100;i++) {
    const row = tabla.insertRow();
    var c_cedula = row.insertCell();
    var c_nombre = row.insertCell();
    var c_provincia = row.insertCell();
    var c_canton = row.insertCell();
    var c_distrito = row.insertCell();
    var c_direccion = row.insertCell();
    var c_codigo = row.insertCell();

    const provincia = ticoFalso.provincia();
    const canton = ticoFalso.canton(provincia);
    const distrito = ticoFalso.distrito(provincia, canton);
    const cedula = ticoFalso.cedula(provincia);
    const nombre = ticoFalso.persona();
    const direccion = ticoFalso.direccion(distrito);
    c_cedula.innerHTML = cedula;
    c_nombre.innerHTML = nombre;
    c_canton.innerHTML = canton;
    c_provincia.innerHTML = provincia;
    c_direccion.innerHTML = direccion;
    c_distrito.innerHTML = distrito;
    c_codigo.innerHTML = ticoFalso.codigoPostal();
}