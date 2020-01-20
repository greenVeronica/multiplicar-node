//optimizando app2.js
/*
 *app.js con argumentos
 */
/*Inicio */
const argv = require('./config/yargs').argv; // solo puedo traer lo que necesito del archivo config/yards.js
//var Color = require('colors'); //otra opcion
const Color = require('colors/safe'); //otra opcion

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //ahora puedo usar directo la funcion




//ahora queremos recibir la base por comando 
//seria algo asi: node app --base=5
let argv2 = process.argv;
console.log(argv);




//console.log(argv.limite);
let comando = argv._[0]; //de la lista de comandos que se encuentra en la prop _ traer el primero
//console.log(comando);
switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
                // archivo = colors.green;
                //                console.log(`el archivo de la tabla ${archivo.red} se creo correctamente`)
                //otra opcion con color/safe
                console.log(`el archivo de la tabla ${Color.red(archivo)} se creo correctamente`)
            })
            .catch(error => {
                console.log(error);
            });
        break
    case 'listar':
        listarTabla(argv.base, argv.limite).then(datos => console.log(datos))
            .catch(error => {
                console.log(error);
            });


        break
    default:
        console.log('no eligio una opcion');



}



/*
console.log(base);

//ahora podemos ejecutar la multiplicacion*/