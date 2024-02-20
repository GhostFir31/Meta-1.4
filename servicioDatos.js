let finDeTransmisionDeDatos = function(id) {
    return new Promise(resolve => {
        console.log("Transferencia", id, "Terminada");
        resolve();
    });
}

let obtenDatosDeInternet = function(id, duracion) {
    return new Promise(resolve => {
        console.log("Proceso", id, "obtenido datos de Internet");
        setTimeout(() => {
            resolve();
        }, duracion);
    });
}

module.exports.getDatos = async function(id, duracion) {
    await obtenDatosDeInternet(id, duracion);
    await finDeTransmisionDeDatos(id);
};