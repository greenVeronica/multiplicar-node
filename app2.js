/*
 *app.js con argumentos
 */
/*Inicio */
const argv = require('yargs')
    .command(['crear'], 'Crea un archivo de tabla de multiplicar', {
        //este obj recibe la configuracion de parametros
        //que esecomando puede recibir
        base: { //seria el --base del command
            demand: true, //obligatorio
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10 //valor por defecto
        }
    })
    .command(['listar'], 'imprime en consola la tabla de multiplicar', {
        //este obj recibe la configuracion de parametros
        //que esecomando puede recibir
        base: { //seria el --base del command
            demand: true, //obligatorio
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10 //valor por defecto
        }
    })
    .help()
    .argv;
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
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`el archivo de la tabla ${archivo} se creo correctamente`))
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