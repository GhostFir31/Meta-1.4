let finDeTransmisionDeDatos=function(id){
console.log("Transferencia",id,"Terminada");
}
let obtenDatosDeInternet=function(id,duracion){
console.log("Proceso",id,"obtenido datos de Internet");
setTimeout(finDeTransmisionDeDatos,duracion,id);
}

module.exports.getDatos=obtenDatosDeInternet;
