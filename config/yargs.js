const opts = {
        base: { //seria el --base del command
            demand: true, //obligatorio
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10 //valor por defecto
        }

    }
    //como en este ejemplo las opciones son iguales se puede:

const argv = require('yargs')
    .command(['crear'], 'Crea un archivo de tabla de multiplicar', opts)
    .command(['listar'], 'imprime en consola la tabla de multiplicar', opts)
    .help()
    .argv;



module.exports = {
    argv
}