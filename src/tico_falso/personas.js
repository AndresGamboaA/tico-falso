import nombresHombres from "./datos/nombres_hombres";
import nombresMujeres from "./datos/nombres_mujeres";
import apellidos from "./datos/apellidos";
import Utils from "./utils";

var Personas = {};

Personas.nombreHombre = function () {
   return Utils.aleatorio(nombresHombres);
};

Personas.nombreMujer = function () {
   return Utils.aleatorio(nombresMujeres);
};

Personas.tico = function () {
   return `${Utils.aleatorio(nombresHombres)} ${Utils.aleatorio(
      nombresHombres
   )} ${Utils.aleatorio(apellidos)} ${Utils.aleatorio(apellidos)}`;
};

Personas.tica = function () {
   return `${Utils.aleatorio(nombresMujeres)} ${Utils.aleatorio(
      nombresMujeres
   )} ${Utils.aleatorio(apellidos)} ${Utils.aleatorio(apellidos)}`;
};

Personas.persona = function () {
   return Math.random() > 0.5 ? Personas.tico() : Personas.tica();
};

Personas.cedula = function (provincia = null) {
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
      throw new Error("Provincia no válida. ¿La escribio bien?");
   }
   return Number(
      p_valor +
         String(Math.floor(Math.random() * (99999999 - 11111111)) + 99999999)
   );
};

export default Personas;
