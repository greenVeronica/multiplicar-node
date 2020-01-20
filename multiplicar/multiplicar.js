/*
 * en la pagina de https://nodejs.org/en/docs/
 * hay documentacion
 * usar la documentacion de la version del node que estamos usando
 * aproximado; ahi se ven los paquetes que vienen preinstalados en node
 * en este caso usaremos el paquete de fileSystem para guardar nuesta tabla de 
 * de multiplicar
 */
//requireds hay tres tipos de require
const fs = require('fs'); //es de una libreria propia de node 
var Color = require('colors');
//const fs = require('express'); //no es una libreria propia de nodes
//const fs = require('./fs'); este son los archivos creados por nuestros proyectos

let listarTabla = (base, limite = 10) => { //el limite es opcional por eso ponemos un valor por default




    return new Promise((resolve, reject) => {
        //control de errores, chequear que la base sea un numero:
        if (!Number(base)) {
            reject(`el valor introducido "${base}" no es un numero valido1`);
            return;
        }

        if (!Number(limite)) {
            reject(`el valor introducido "${limite}" no es un numero valido1`);
            return;
        }

        console.log(`=========================================`.green); //usando la libreria colors
        console.log(`============Tabla ${base}======================`.red);
        console.log(`=========================================`.green);

        let data = " la base indicada es " + base + " el limite es " + limite + "\n";

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i} \n`;

        }
        resolve(data)

    });
}

//usaremos fs.writeFile(file, data[, options], callback)
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        //control de errores, chequear que la base sea un numero:
        if (!Number(base)) {
            reject(`el valor introducido "${base}" no es un numero valido`);
            return;
        }
        if (!Number(limite)) {
            reject(`el valor introducido "${limite}" en el limite no es un numero valido`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i} \n`;

        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => { //este es el callback

            if (err) reject(err)
            else
                resolve(`tablas/tabla-${base}.txt`)

            //           console.log('El archivo ha sido creado');
        });
    });
}


//para que se pueda usar este archivo desde otros hay varias formas

//1era forma
//extendiendo el module:
/*recomendada
 */
module.exports = {
    crearArchivo, // es igual a crearArchivo:crearArchivo  ya que desde el ecmas 6 no es necesario
    //si hay mas funciones se van agregando.
    listarTabla
}

//segunda forma redefiniendo la funcion en lugar de "let crearArchivo = (base) => {"
//va:module.exports.crearArchivo = (base) => {