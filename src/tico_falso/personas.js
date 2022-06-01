import nombresHombres from "./datos/nombres_hombres";
import nombresMujeres from "./datos/nombres_mujeres";
import apellidos from "./datos/apellidos";
import Ubicacion from "./ubicacion";
import Utils from "./utils";

var Personas = {};

Personas.nombre = function(femenino=false) {
   if (femenino)
      return Utils.aleatorio(nombresMujeres);
   return Utils.aleatorio(nombresHombres);
}

Personas.apellido = function() {
   return Utils.aleatorio(apellidos);
}

Personas.nombreHombre = function () {
   return Utils.aleatorio(nombresHombres);
};

Personas.nombreMujer = function () {
   return Utils.aleatorio(nombresMujeres);
};

Personas.tico = function(apellidosPrimero=false) {
   const nombre = `${Utils.aleatorio(nombresHombres)} ${Utils.aleatorio(nombresHombres)}`;
   const tico_apellidos = `${Utils.aleatorio(apellidos)} ${Utils.aleatorio(apellidos)}`;
   if (apellidosPrimero)
      return tico_apellidos + " " + nombre;
   return nombre + " " + tico_apellidos;
};

Personas.tica = function(apellidosPrimero=false) {
   const nombre = `${Utils.aleatorio(nombresMujeres)} ${Utils.aleatorio(nombresMujeres)}`;
   const tico_apellidos = `${Utils.aleatorio(apellidos)} ${Utils.aleatorio(apellidos)}`;
   if (apellidosPrimero)
      return tico_apellidos + " " + nombre;
   return nombre + " " + tico_apellidos;
};

Personas.persona = function (apellidosPrimero=false) {
   return Math.random() > 0.5 ? Personas.tico(apellidosPrimero) : Personas.tica(apellidosPrimero);
};

Personas.datos = function() {
   const sexo = Math.random() > 0.5 ? "masculino":"femenino";
   const provincia = Ubicacion.provincia();
   const canton = Ubicacion.canton(provincia);
   const distrito = Ubicacion.distrito(provincia, canton);
   const direccion = Ubicacion.direccion(distrito);

   return {
      nombre: Personas.nombre(sexo==="femenino") +  " " + Personas.nombre(sexo==="femenino"),
      apellidos: Personas.apellido() + " " + Personas.apellido(),
      sexo: sexo,
      cedula: Personas.cedula(true, provincia),
      provincia: provincia,
      canton: canton,
      distrito: distrito,
      direccion: direccion,
      iban: Personas.iban(),
      telefono: Personas.telefono()
   }
}

Personas.cedula = function (formateada=true, provincia = null) {
   var p_valor = Utils.aleatorio([1, 2, 3, 4, 5, 6, 7]);
   if (provincia) {
      p_valor =
         [
            "San José",
            "Alajuela",
            "Cartago",
            "Heredia",
            "Guanacaste",
            "Puntarenas",
            "Limón",
         ].indexOf(provincia) + 1;
   }
   if (p_valor == 0) {
      throw new Error("Provincia no válida.");
   }
   var tomo = Math.floor(Math.random() * 9999);
   var asiento = Math.floor(Math.random() * 9999);

   if (formateada) {
      return `0${p_valor}-${String(tomo).padStart(4, '0')}-${String(asiento).padStart(4, '0')}`;
   }
   return `0${p_valor}${String(tomo).padStart(4, '0')}${String(asiento).padStart(4, '0')}`;
};
//      0011000011111100000000
// IBAN CR06010200009123456789
Personas.iban = function() {
   const codigoPais = "CR";
   const verificador = String(Math.floor(Math.random()*99)).padStart(2, '0');
   const banco = Utils.aleatorio(['100','102','104','107','123','151','152','161']);
   const cuenta1 = String(Math.floor(Math.random() * (19999999 - 10000000) ) + 100000000).padStart(8, '0');
   const cuenta2 = String(Math.floor(Math.random() * 99999)).padStart(5, '0');
   return codigoPais + verificador + "0" + banco + cuenta1 + cuenta2;
}

Personas.telefono = function() {
   const telefonica = Utils.aleatorio([6,8]);
   return Number(""+telefonica+(String(Math.floor(Math.random() * 9999999)).padStart(7, '0')));
}

export default Personas;
