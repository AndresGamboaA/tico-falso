# tico-falso
Generador de información falsa costarricense.

## Instalacion
```shell
npm i tico-falso
```
### Navegador
```html
<script type="module" src="tico_falso.js" defer></script>
<script type="module" defer>
  const ticoAleatorio = ticoFalso.personas.tico(); // Juan Alberto Arias Mora
  const ticaAleatoria = ticoFalso.personas.tica(); // Jessica Maria Cespedes Hernandez
  const cedula = ticoFalso.personas.cedula(); // 120404057
  const direccion = ticoFalso.ubicacion.direccion(); // Setecientos metros sur del colegio profesional de Gravilias.
  const provincia = ticoFalso.ubicacion.provincia(); // Heredia
</script>
```
#### React
```javascript
import ticoFalso from 'tico-falso';
```
### Node.js
```javascript
const ticoFalso = require('tico-falso');
```
