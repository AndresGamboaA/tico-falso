(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
   typeof define === 'function' && define.amd ? define(factory) :
   (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ticoFalso = factory());
})(this, (function () { 'use strict';

   //https://nombresdepersona.com/costa-rica

   var nombresHombres = [
      'Carlos',
      'Juan',
      'Jorge',
      'Victor',
      'Gerardo',
      'Rafael',
      'Mario',
      'Oscar',
      'Manuel',
      'Miguel',
      'Francisco',
      'Marco',
      'Ronald',
      'Alvaro',
      'Alexander',
      'William',
      'Marvin',
      'Eduardo',
      'David',
      'Jonathan',
      'Ricardo',
      'Edgar',
      'Edwin',
      'Mauricio',
      'Fernando',
      'Esteban',
      'Javier',
      'Michael',
      'Jesús',
      'Roberto',
      'Walter',
      'Andrés',
      'Diego',
      'Alejandro',
      'Sergio',
      'Guillermo',
      'Julio',
      'Adrian',
      'Henry',
      'Pablo',
      'Johnny',
      'Christian',
      'Gustavo',
      'Rodrigo',
      'Roger',
      'Rodolfo',
      'Freddy',
      'Marcos',
      'Allan',
      'Erick',
      'Cesar',
      'Pedro',
      'Roy',
      'Cristian',
      'Alberto',
      'Bryan',
      'Antonio',
      'Orlando',
      'Giovanni',
      'Rolando',
      'German'
   ];

   //https://nombresdepersona.com/costa-rica

   var nombresMujeres = [
       'María',
       'Ana',
       'Carmen',
       'Rosa',
       'Laura',
       'Marta',
       'Flor',
       'Andrea',
       'Adriana',
       'Olga',
       'Karla',
       'Elizabeth',
       'Karen',
       'Silvia',
       'Sandra',
       'Sonia',
       'Katherine',
       'Luz',
       'Jessica',
       'Evelyn',
       'Shirley',
       'Alejandra',
       'Carolina',
       'Margarita',
       'Ligia',
       'Roxana',
       'Virginia',
       'Gabriela',
       'Maritza',
       'Patricia',
       'Blanca',
       'Isabel',
       'Diana',
       'Wendy',
       'Marjorie',
       'Cindy',
       'Karol',
       'Jenny',
       'Tatiana',
       'Miriam',
       'Marlene',
       'Grettel',
       'Yamileth',
       'Natalia',
       'Monica',
       'Mayra',
       'Daniela',
       'Melissa',
       'Yesenia',
       'Jacqueline',
       'Jennifer',
       'Johanna',
       'Marcela',
       'Stephanie',
       'Rebeca',
       'Kimberly',
       'Jeannette',
       'Angie',
       'Hilda',
       'Damaris',
       'Ingrid',
       'Vilma',
       'Marianela',
       'Cecilia',
       'Hazel',
       'Rosibel',
       'Raquel',
       'Maribel',
       'Viviana',
      'Angela',
      'Juana',
      'Ruth',
      'Nuria',
      'Lidia',
      'Nancy',
      'Teresa',
      'Erika',
      'Sara',
      'Norma',
      'Gladys',
      'Alicia',
      'Lilliam',
      'Maureen',
      'Nidia',
      'Giselle',
      'Flora',
      'Paola',
      'Grace',
      'Lorena',
      'Yolanda',
      'Veronica',
      'Alba',
      'Mariana',
      'Daisy',
      'Irene',
      'Susana',
      'Vera',
      'Karina',
      'Mercedes',
      'Vanessa',
      'Rita',
      'Mariela',
      'Rocio',
      'Paula',
      'Mayela',
      'Cristina',
      'Gloria',
      'Iliana',
      'Iris',
      'Dennis',
      'Ericka',
      'Lucia',
      'Alexandra',
      'Marisol',
      'Hellen',
      'Priscila',
      'Teresita',
      'Mireya',
      'Marilyn',
      'Dora',
      'Emilce',
      'Dayana',
      'Elena',
      'Fanny',
      'Cynthia',
      'Claudia',
      'Joselyn',
      'Zaida',
      'Yadira',
      'Pamela',
      'Doris',
      'Leticia',
      'Julia',
      'Angelica',
      'Martha',
      'Carol',
      'Irma',
      'Maricela',
      'Fabiola',
      'Aracelly',
      'Elsa',
      'Dinorah',
      'Edith',
      'Aida',
      'Noemy',
      'Beatriz',
      'Emilia',
      'Nelly',
      'Clara',
      'Anabelle',
      'Cinthya',
      'Victoria',
      'Sofia',
      'Luisa',
      'Leidy',
      'Sharon',
      'Leda',
      'Haydee',
      'Catalina',
      'Graciela',
      'Gerardina'
   ];

   var apellidos = [
       'Rodriguez',
       'Vargas',
       'Jimenez',
       'Mora',
       'Rojas',
       'Gonzalez',
       'Sanchez',
       'Hernandez',
       'Ramirez',
       'Castro',
       'Lopez',
       'Araya',
       'Solano',
       'Alvarado',
       'Chavez',
       'Perez',
       'Morales',
       'Campos',
       'Quezada',
       'Gomez',
       'Arias',
       'Quiros',
       'Fernandez',
       'Salazar',
       'Villalobos',
       'Brenes',
       'Gutierrez',
       'Garcia',
       'Alfaro',
       'Vega',
       'Aguilar',
       'Calderon',
       'Valverde',
       'Chavarria',
       'Alvarez',
       'Castillo',
       'Salas',
       'Espinoza',
       'Martinez',
       'Solis',
       'Murillo',
       'Soto'
   ];

   var provincias = [
       {
           nombre: 'San José',
           cantones: [
               {
                   nombre: 'San José', 
                   cabecera: 'San José',
                   distritos: [
                    'Carmen',
                    'Merced',
                    'Hospital',
                    'Catedral',
                    'Zapote',
                    'San Francisco de Dos Ríos',
                    'La Uruca',
                    'Mata Redonda',
                    'Pavas',
                    'Hatillo'
                   ]
               },
               {
                   nombre: 'Escazú', 
                   cabecera: 'Escazú',
                   distritos: [
                      'San Sebastián',
                      'Escazú',
                      'San Antonio',
                      'San Rafael',
                   ]
           
               },
               {
                   nombre: 'Desamparados', 
                   cabecera: 'Desamparados',
                   distritos: [
                       'Desamparados',
                       'San Miguel',
                       'San Juan de Dios',
                       'San Rafael Arriba',
                       'San Antonio',
                       'Frailes',
                       'Patarrá',
                       'San Cristóbal',
                       'Rosario',
                       'Damas',
                       'San Rafael Abajo',
                       'Gravilias',
                       'Los Guido'
                   ]
               },
               {
                   nombre: 'Puriscal', 
                   cabecera: 'Santiago',
                   distritos: [
                       'Santiago',
                       'Mercedes Sur',
                       'Barbacoas',
                       'Grifo Alto',
                       'San Rafael',
                       'Candelarita',
                       'Desamparaditos',
                       'San Antonio',
                       'Chires'
                       
                   ]
               },
               {
                   nombre: 'Tarrazú', 
                   cabecera: 'San Marcos',
                   distritos: [
                       'San Marcos',
                       'San Lorenzo',
                       'San Carlos'
                   ]
               },
               {
                   nombre: 'Aserrí',
                   cabecera: 'Aserrí',
                   distritos: [
                       'Aserrí',
                       'Tarbaca',
                       'Vuelta de Jorco',
                       'San Gabriel',
                       'Legua',
                       'Monterrey',
                       'Salitrillos',
                   ]
               },
               {
                   nombre: 'Mora', 
                   cabecera: 'Ciudad Colón',
                   distritos: [
                       'Colon',
                       'Guayabo',
                       'Tabarcia',
                       'Piedras Negras',
                       'Picagres',
                       'Jaris',
                       'Quitirrisi'
                   ]
               },
               {
                   nombre: 'Goicoechea', 
                   cabecera: 'Guadalupe',
                   distritos: [
                       'Guadalupe',
                       'San Francisco',
                       'Calle Blancos',
                       'Mata de Platano',
                       'Ipis',
                       'Rancho Redondo',
                       'Purral'
                   ]
               },
               {
                   nombre: 'Santa Ana', 
                   cabecera: 'Santa Ana',
                   distritos: [
                       'Santa Ana',
                       'Salitral',
                       'Pozos',
                       'Uruca',
                       'Piedades',
                       'Brasil'
                   ]
               },
               {
                   nombre: 'Alajuelita',
                   cabecera: 'Alajuelita',
                   distritos: [
                       'alajuelita',
                       'san josécito',
                       'san antonio',
                       'concepcion',
                       'san felipe',
                   ]
               },
               {
                   nombre: 'Vásquez de Coronado',
                   cabecera:'San Isidro',
                   distritos: [
                       'San Isidro',
                       'San Rafael',
                       'Dulce Nombre de Jesús',
                       'Patalillo',
                       'Cascajal'
                   ]
               },
               {
                   nombre: 'Acosta',
                   cabecera: 'San Ignacio',
                   distritos: [
                       'San Ignacio de Acosta',
                       'Guaitil',
                       'Palmichal',
                       'Cangrejal',
                       'Sabanillas'
                   ]
               },
               {
                   nombre: 'Tibás',
                   cabecera: 'San Juan',
                   distritos: [
                       'San Juan',
                       'Cinco esquinas',
                       'Anselmo Llorente',
                       'Leon XIII',
                       'Colima'
                   ]
               },
               {
                   nombre: 'Moravia', 
                   cabecera: 'San Vicente',
                   distritos: [
                       'San Vicente',
                       'San Jeronimo',
                       'Trinidad'
                   ]
               },
               {
                   nombre: 'Montes de Oca', 
                   cabecera: 'San Pedro',
                   distritos: [
                       'San Pedro',
                       'Sabanilla',
                       'Mercedes',
                       'San Rafael'
                   ]
               },
               {
                   nombre: 'Turrubares',
                   cabecera:'San Pablo',
                   distritos: [
                       'San Pablo',
                       'San Pedro',
                       'San Juan de Mata',
                       'San Luis',
                       'Carara',
                   ]
               },
               {
                   nombre: 'Dota', 
                   cabecera:'Santa María',
                   distritos: [
                       'Santa María',
                       'Jardin',
                       'Copey',                    
                   ]
               },
               {
                   nombre: 'Curridabat', 
                   cabecera:'Curridabat',
                   distritos: [
                       'Curridabat',
                       'Granadilla',
                       'Sánchez',
                       'Tirrases'
                   ]
               },
               {
                   nombre: 'Pérez Zeledón', 
                   cabecera: 'San Isidro de El General',
                   distritos: [
                       'San Isidro del General',
                       'General',
                       'Daniel Flores',
                       'Rivas',
                       'San Pedro',
                       'Platanares',
                       'Pejibaye',
                       'Cajon',
                       'Baru',
                       'Río Nuevo',
                       'Paramo'
                   ]
               },
               {
                   nombre: 'León Cortéz', cabecera: 'San Pablo',
                   distritos: [
                       'San Pablo',
                       'San Andres',
                       'Llano Bonito',
                       'San Isidro',
                       'Santa Cruz',
                       'San Antonio'
                   ]
               }
           ]
       },
       {
           nombre: 'Alajuela',
           cantones: [
               {
                   nombre: 'Alajuela',
                   cabecera: '',
                   distritos: [
                       'Alajuela',
                       'San José',
                       'Carrizal',
                       'San Antonio',
                       'Guacima',
                       'San Isidro',
                       'Sabanilla',
                       'San Rafael',
                       'Río Segundo',
                       'Desamparados',
                       'Turrucares',
                       'Tambor',
                       'Garita',
                       'Sarapiquí'
                   ]
               },
               {
                   nombre: 'San Ramón',
                   cabecera: '',
                   distritos: [
                       'San Ramón',
                       'Santiago',
                       'San Juan',
                       'Piedades Norte',
                       'Piedades Sur',
                       'San Rafael',
                       'San Isidro',
                       'angeles',
                       'Alfaro',
                       'Volio',
                       'Concepcion',
                       'Zapotal', 
                       'Peñas Blancas'
                   ]
               },
               {
                   nombre: 'Grecia',
                   cabecera: '',
                   distritos: [
                       'Grecia',
                       'San Isidro',
                       'San José',
                       'San Roque',
                       'Tacares',
                       'Río Cuarto',
                       'Puente de Piedra',
                       'Bolivar'
                   ]
               },
               {
                   nombre: 'San Mateo',
                   cabecera: '',
                   distritos: [
                       'San Mateo',
                       'Desmonte',
                       'Jesús María'
                   ]
               },
               {
                   nombre: 'Atenas',
                   cabecera: '',
                   distritos: [
                       'Atenas',
                       'Jesús',
                       'Mercedes',
                       'San Isidro',
                       'Concepcion',
                       'San José',
                       'Santa Eulalia',
                       'Escobal'
                   ]
               },
               {
                   nombre: 'Naranjo',
                   cabecera: '',
                   distritos: [
                       'Naranjo',
                       'San Miguel',
                       'San José',
                       'Cirri Sur',
                       'San Jeronimo',
                       'San Juan',
                       'Rosario',
                       'Palmitos'
                   ]
               },
               {
                   nombre: 'Palmares',
                   cabecera: '',
                   distritos: [
                       'Palmares',
                       'Zaragoza',
                       'Buenos Aires',
                       'Santiago',
                       'Candelaria',
                       'Esquipulas',
                       'Granja'
                   ]
               },
               {
                   nombre: 'Poas',
                   cabecera: '',
                   distritos: [
                       'San Pedro',
                       'San Juan',
                       'San Rafael',
                       'Carrillos',
                       'Sabana Redonda'
                   ]
               },
               {
                   nombre: 'Orotina',
                   cabecera: '',
                   distritos: [
                       'Orotina',
                       'Mastate',
                       'Hacienda Vieja',
                       'Coyolar',
                       'Ceiba'
                   ]
               },
               {
                   nombre: 'San Carlos',
                   cabecera: '',
                   distritos: [
                       'Quesada',
                       'Florencia',
                       'Buenavista',
                       'Aguas Zarcas',
                       'Venecia',
                       'Pital',
                       'Fortuna',
                       'Tigra',
                       'Palmera',
                       'Venado',
                       'Cutris',
                       'Monterrey',
                       'Pocosol'
                   ]
               },
               {
                   nombre: 'Alfaro Ruiz',
                   cabecera: '',
                   distritos: [
                       'Zarcero',
                       'Laguna',
                       'Tapezco',
                       'Guadalupe',
                       'Palmira',
                       'Zapote',
                       'Brisas'
                   ]
               },
               {
                   nombre: 'Valverde Vega',
                   cabecera: '',
                   distritos: [
                       'Sarchi Norte',
                       'Sarchi Sur',
                       'Toro Amarillo',
                       'San Pedro',
                       'Rodriguez'
                   ]
               },
               {
                   nombre: 'Upala',
                   cabecera: '',
                   distritos: [
                       'Upala',
                       'Aguas Claras',
                       'San José (Pizote)',
                       'Bijagua',
                       'Delicias',
                       'Dos Ríos',
                       'Yoliyllal'
                   ]
               },
               {
                   nombre: 'Los Chiles',
                   cabecera: '',
                   distritos: [
                       'Los Chiles',
                       'Caño Negro',
                       'El Amparo',
                       'San Jorge'
                   ]
               },
               {
                   nombre: 'Guatuso',
                   cabecera: '',
                   distritos: [
                       'San Rafael',
                       'Buenavista',
                       'Cote',
                       'Katira'
                   ]
               },
           ]
       },
       {
           nombre: 'Cartago',
           cantones: [
               {
                   nombre: 'Cartago',
                   cabecera: '',
                   distritos: [
                       'Oriental',
                       'Occidental',
                       'Carmen',
                       'San Nicolas',
                       'Aguacaliente (San Francisco)',
                       'Guadalupe (Arenilla)',
                       'Corralillo',
                       'Tierra Blanca',
                       'Dulce Nombre',
                       'Llano Grande',
                       'Quebradilla'
                   ]
               },
               {
                   nombre: 'Paraíso',
                   cabecera: '',
                   distritos: [
                       'Paraíso',
                       'Santiago',
                       'Orosi',
                       'Cachi',
                       'Llanos de Santa Lucia'
                   ]
               },
               {
                   nombre: 'La Unión',
                   cabecera: '',
                   distritos: [
                       'Tres Ríos',
                       'San Diego',
                       'San Juan',
                       'San Rafael',
                       'Concepcion',
                       'Dulce Nombre',
                       'San Ramón',
                       'Río Azul'
                   ]
               },
               {
                   nombre: 'Jiménez',
                   cabecera: '',
                   distritos: [
                       'Juan Viñas',
                       'Tucurrique',
                       'Pejibaye'
                   ]
               },
               {
                   nombre: 'Turriealba',
                   cabecera: '',
                   distritos: [
                       'Turrialba',
                       'La Suiza',
                       'Peralta',
                       'Santa Cruz',
                       'Santa Teresita',
                       'Pavones',
                       'Tuis',
                       'Tayutic',
                       'Santa Rosa',
                       'Tres Equis',
                       'La Isabel',
                       'Chirripo'
                   ]
               },
               {
                   nombre: 'Alvarado',
                   cabecera: '',
                   distritos: [
                       'Pacayas',
                       'Cervantes',
                       'Capellades'
                   ]
               },
               {
                   nombre: 'Oreamuno',
                   cabecera: '',
                   distritos: [
                       'San Rafael',
                       'Cot',
                       'Potrero Cerrado',
                       'Cipreses',
                       'Santa Rosa'
                   ]
               },
               {
                   nombre: 'El Guarco',
                   cabecera: '',
                   distritos: [
                       'Tejar',
                       'San Isidro',
                       'Tobosi',
                       'Patio de Agua'
                   ]
               }
           ]
       },
       {
           nombre: 'Heredia',
           cantones: [
               {
                   nombre: 'Heredia',
                   cabecera: '',
                   distritos: [
                       'Heredia',
                       'Mercedes',
                       'San Francisco',
                       'Ulloa',
                       'Varablanca'
                   ]
               },
               {
                   nombre: 'Barva',
                   cabecera: '',
                   distritos: [
                       'Barva',
                       'San Pedro',
                       'San Pablo',
                       'San Roque',
                       'Santa Lucia',
                       'San José de la Montaña'
                   ]
               },{
                   nombre: 'Santo Domingo',
                   cabecera: '',
                   distritos: [
                       'Santo Domingo',
                       'San Vicente',
                       'San Miguel',
                       'Paracito',
                       'Santo Tomas',
                       'Santa Rosa',
                       'Tures',
                       'Para'    
                   ]
               },{
                   nombre: 'Santa Barbara',
                   cabecera: '',
                   distritos: [
                       'Santa Barbara',
                       'San Pedro',
                       'San Juan',
                       'Jesús',
                       'Santo Domingo',
                       'Puraba'
                   ]
               },{
                   nombre: 'San Rafael',
                   cabecera: '',
                   distritos: [
                       'San Rafael',
                       'San Josécito',
                       'Santiago',
                       'angeles',
                       'Concepcion'
                   ]
               },{
                   nombre: 'San Isidro',
                   cabecera: '',
                   distritos: [
                       'San Isidro',
                       'San José',
                       'Concepcion',
                       'San Francisco'
                   ]
               },{
                   nombre: 'Belen',
                   cabecera: '',
                   distritos: [
                       'San Antonio',
                       'Ribera',
                       'Asuncion'
                   ]
               },{
                   nombre: 'Flores',
                   cabecera: '',
                   distritos: [
                       'San Joaquín de Flores',
                       'Barrantes',
                       'Llorente'
                   ]
               },
               {
                   nombre: 'San Pablo',
                   cabecera: '',
                   distritos: [
                       'San Pablo',
                       'Rincón de Sabanilla'
                   ]
               },
               {
                   nombre: 'Sarapiquí',
                   cabecera: '',
                   distritos: [
                       'Puerto Viejo',
                       'La Virgen',
                       'Horquetas',
                       'Llanuras del Gaspar',
                       'Cureña'
                   ]
               }
           ]
       },
       {
           nombre: 'Guanacaste',
           cantones: [
               {
                   nombre: 'Liberia',
                   cabecera: '',
                   distritos: [
                       'Liberia',
                       'Cañas Dulces',
                       'Mayorga',
                       'Nacascolo',
                       'Curubande'
                   ]
               },
               {
                   nombre: 'Nicoya',
                   cabecera: '',
                   distritos: [
                       'Nicoya',
                       'Mansion',
                       'San Antonio',
                       'Quebrada Honda',
                       'Samara',
                       'Nosara',
                       'Belen de Nosarita'
                   ]
               },
               {
                   nombre: 'Santa Cruz',
                   cabecera: '',
                   distritos: [
                       'Santa Cruz',
                       'Bolson',
                       'Veintisiete de Abril',
                       'Tempate',
                       'Cartagena',
                       'Cuajiniquil',
                       'Diria',
                       'Cabo Velas',
                       'Tamarindo'
                   ]
               },
               {
                   nombre: 'Bagaces',
                   cabecera: '',
                   distritos: [
                       'Bagaces',
                       'Fortuna',
                       'Mogote',
                       'Río Naranjo'
                   ]
               },
               {
                   nombre: 'Carrillo',
                   cabecera: '',
                   distritos: [
                       'Filadelfia',
                       'Palmira',
                       'Sardinal',
                       'Belen'
                   ]
               },
               {
                   nombre: 'Cañaz',
                   cabecera: '',
                   distritos: [
                       'Cañas',
                       'Palmira',
                       'San Miguel',
                       'Bebedero',
                       'Porozal'
                   ]
               },
               {
                   nombre: 'Abangares',
                   cabecera: '',
                   distritos: [
                       'Juntas',
                       'Sierra',
                       'San Juan',
                       'Colorado'
                   ]
               },
               {
                   nombre: 'Tilaran',
                   cabecera: '',
                   distritos: [
                       'Tilaran',
                       'Quebrada Grande',
                       'Tronadora',
                       'Santa Rosa',
                       'Libano',
                       'Tierras Morenas',
                       'Arenal'
                   ]
               },
               {
                   nombre: 'Nandayure',
                   cabecera: '',
                   distritos: [
                       'Carmona',
                       'Santa Rita',
                       'Zapotal',
                       'San Pablo',
                       'Porvenir',
                       'Bejuco'
                   ]
               },
               {
                   nombre: 'La Cruz',
                   cabecera: '',
                   distritos: [
                       'La Cruz',
                       'Santa Cecilia',
                       'Garita',
                       'Santa Elena'
                   ]
               },
               {
                   nombre: 'Hojancha',
                   cabecera: '',
                   distritos: [
                       'Hojancha',
                       'Monte Romo',
                       'Puerto Carrillo',
                       'Huacas'
                   ]
               }
           ]
       },
       {
           nombre: 'Puntarenas',
           cantones: [
               {
                   nombre: 'Puntarenas',
                   cabecera: '',
                   distritos: [
                       'Puntarenas',
                       'Pitahaya',
                       'Chomes',
                       'Lepanto',
                       'Paquera',
                       'Manzanillo',
                       'Guacimal',
                       'Barranca',
                       'Monte Verde',
                       'Isla del Coco',
                       'Cobano',
                       'Chacarita',
                       'Chira',
                       'Acapulco',
                       'El Roble',
                       'Arancibia'
                   ]
               },
               {
                   nombre: 'Esparza',
                   cabecera: '',
                   distritos: [
                       'Espiritu Santo',
                       'San Juan Grande',
                       'Macacona',
                       'San Rafael',
                       'San Jeronimo'
                   ]
               },
               {
                   nombre: '',
                   cabecera: '',
                   distritos: [
                       'Buenos Aires',
                       'Volcan',
                       'Potrero Grande',
                       'Boruca',
                       'Pilas',
                       'Colinas',
                       'Changena',
                       'Briolley',
                       'Brunka'
                   ]
               },
               {
                   nombre: 'Montes de Oro',
                   cabecera: '',
                   distritos: [
                       'Miramar',
                       'Uníon',
                       'San Isidro'
                   ]
               },
               {
                   nombre: 'Osa',
                   cabecera: '',
                   distritos: [
                       'Puerto Cortes',
                       'Palmar',
                       'Sierpe',
                       'Bahia Ballena',
                       'Piedras Blancas'
                   ]
               },
               {
                   nombre: 'Aguirre',
                   cabecera: '',
                   distritos: [
                       'Quepos',
                       'Savegre',
                       'Naranjito'
                   ]
               },
               {
                   nombre: 'Golfito',
                   cabecera: '',
                   distritos: [
                       'Golfito',
                       'Puerto Jiménez',
                       'Guaycara',
                       'Pavon'
                   ]
               },
               {
                   nombre: 'Coto Brus',
                   cabecera: '',
                   distritos: [
                       'San Vito',
                       'Sabalito',
                       'Aguabuena',
                       'Limóncito',
                       'Pittier'
                   ]
               },
               {
                   nombre: 'Parrita',
                   cabecera: '',
                   distritos: [
                       'Parrita'
                   ]
               },
               {
                   nombre: 'Corredores',
                   cabecera: '',
                   distritos: [
                       'Corredor',
                       'La Cuesta',
                       'Canoas',
                       'Laurel'
                   ]
               },
               {
                   nombre: 'Garabito',
                   cabecera: '',
                   distritos: [
                       'Jaco',
                       'Tarcoles'
                   ]
               }
           ]
       },
       {
           nombre: 'Limón',
           cantones: [
               {
                   nombre: 'Limón',
                   cabecera: '',
                   distritos: [
                       'Limón',
                       'Valle La Estrella',
                       'Río Blanco',
                       'Matama'
                   ]
               },
               {
                   nombre: 'Pococí',
                   cabecera: '',
                   distritos: [
                       'Guapiles',
                       'Jiménez',
                       'Rita',
                       'Roxana',
                       'Cariari',
                       'Colorado'
                   ]
               },
               {
                   nombre: 'Siquirres',
                   cabecera: '',
                   distritos: [
                       'Siquirres',
                       'Pacuarito',
                       'Florida',
                       'Germania',
                       'Cairo',
                       'Alegria'
                   ]
               },
               {
                   nombre: 'Talamanca',
                   cabecera: '',
                   distritos: [
                       'Bratsi',
                       'Sixaola',
                       'Cahuita',
                       'Telire'
                   ]
               },
               {
                   nombre: 'Matina',
                   cabecera: '',
                   distritos: [
                       'Matina',
                       'Battan',
                       'Carrandi'
                   ]
               },
               {
                   nombre: 'Guácimo',
                   cabecera: '',
                   distritos: [
                       'Guácimo',
                       'Mercedes',
                       'Pocora',
                       'Río Jiménez',
                       'Duacari',
                   ]
               }
           ]
       },
   ];

   var senales = {
       metros:[
           'Cien',
           'Doscientos',
           'Trescientos',
           'Cuatrocientos',
           'Quinientos',
           'Seiscientos',
           'Setecientos',
           'Ochocientos',
           'Novecientos'
       ],
       puntosCardinales: [
           'sur',
           'norte',
           'este',
           'oeste'
       ],
       puntosReferencia: [
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
       ]
   };

   var Utils = {};

   Utils.aleatorio = function (array) {
       return array[Math.floor(Math.random() * array.length)];
   };

   var Ubicacion = {};

   Ubicacion.provincia = function() {
       return Utils.aleatorio(provincias).nombre;
   };

   Ubicacion.canton = function(nombreProvincia=null) {
       const provincia = nombreProvincia?
           provincias.find(provincia => provincia.nombre == nombreProvincia):
           Utils.aleatorio(provincias);
       return Utils.aleatorio(provincia.cantones).nombre;
   };

   Ubicacion.distrito = function(nombreProvincia,nombreCanton=null) {
       let provincia = nombreProvincia?
           provincias.find(item => item.nombre == nombreProvincia):
           Utils.aleatorio(provincias);

       let canton = nombreCanton?
           provincia.cantones.find(item => item.nombre == nombreCanton):
           Utils.aleatorio(provincia.cantones);

       return Utils.aleatorio(canton.distritos);
   };

   Ubicacion.codigoPostal = function() {
       return Math.floor(Math.random() * (70605 - 10101) ) + 10101;
   };

   Ubicacion.direccion = function(pueblo=null) {
       return `${Utils.aleatorio(senales.metros)} metros ${Utils.aleatorio(senales.puntosCardinales)} ${Utils.aleatorio(senales.puntosReferencia)} de ${pueblo?pueblo:Ubicacion.distrito()}.`;
   };

   var Personas = {};

   Personas.nombre = function(femenino=false) {
      if (femenino)
         return Utils.aleatorio(nombresMujeres);
      return Utils.aleatorio(nombresHombres);
   };

   Personas.apellido = function() {
      return Utils.aleatorio(apellidos);
   };

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
   };

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
   };

   Personas.telefono = function() {
      const telefonica = Utils.aleatorio([6,8]);
      return Number(""+telefonica+(String(Math.floor(Math.random() * 9999999)).padStart(7, '0')));
   };

   const ticoFalso = {
       personas: Personas,
       ubicacion: Ubicacion
   };

   return ticoFalso;

}));
