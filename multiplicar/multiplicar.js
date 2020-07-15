const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('El valor de la base debe ser un número.');
            return;
        }
        if (!Number(limite)) {
            reject('El valor del limite debe ser un número.');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(data);

    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido debe ser un número.');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-hasta-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`El archivo tabla-${base}-limite-hasta-${limite}.txt ha sido creado.`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}