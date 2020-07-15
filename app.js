const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(resp => {
                console.log('================='.green);
                console.log(`Tabla del ${argv.base}`.green);
                console.log('================='.green);
                console.log(resp);
            })
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}












// const fs = require('fs');

// let base = 4;
// let data = '';
// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base*i}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log('El archivo tabla-2.txt ha sido creado.');
// });