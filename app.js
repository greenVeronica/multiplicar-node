/*
 *para poder usar la funcion  hay que importar la funcion 
 multiplicar.js 
 */
/*Inicio */
//const multiplicar = require('./multiplicar/multiplicar') //no hace falta el .js
//otra forma de usar la funcion que esta dentro de multiplicar es mediante la destructuracion el obj module.exports

// const { crearArchivo: crearArchivo } = require('./multiplicar/multiplicar'); //ahora puedo usar directo la funcion
//O
const { crearArchivo } = require('./multiplicar/multiplicar'); //ahora puedo usar directo la funcion

//let base = 'hola';

//console.log(multiplicar);
//el obj multiplicar tiene una prop crearArchivo que tiene una funcion:
//{ crearArchivo: [Function: crearArchivo] }
/*
crearArchivo(base).then(archivo => console.log(`el archivo de la tabla ${archivo} se creo correctamente`))
    .catch(error => {
        console.log(error);
    });*/

//console.log(process);
//console.log(process.argv);

//ahora queremos recibir la base por comando 
//seria algo asi: node app --base=5
let argv = process.argv;
//ahora crearemos el tercer agumento base
let parametro = argv[2]; //tomamos la tercer posicion ya que las dos primeras vienen por default 
let base = parametro.split('=')[1];
console.log(base);

//ahora podemos ejecutar la multiplicacion
crearArchivo(base).then(archivo => console.log(`el archivo de la tabla ${archivo} se creo correctamente`))
    .catch(error => {
        console.log(error);
    });

//si probamos "node app --base=4 " haria la tabla del 4, pero esto es muy susceptible a errores