const datosAsignaturas = [
  { clave: 11520, nombre: "Ingenieria Economica" },
  { clave: 11521, nombre: "Matematicas Discretas" },
  { clave: 11522, nombre: "Programacion Estructurada" },
  { clave: 11523, nombre: "Señales y Sistemas" },
  { clave: 11524, nombre: "Circuitos Electricos" },
  { clave: 11525, nombre: "Circuitos Digitales" },
];
cantidadRegistros = process.argv[2] ? parseInt(process.argv[2]) : 1;
const historialAsignaturas = [];
for (let i = 0; i < cantidadRegistros; i++) {
  historialAsignaturas.push(registroAsignatura());
}
console.log("Lista de asignaturas completa:");
console.log(historialAsignaturas.map(formatoFechaCompleta));
function generarNumeroAleatorio(valorMin, valorMax) {
  return Math.floor(Math.random() * (valorMax - valorMin + 1)) + valorMin;
}
function generarFecha(fechaInicio, fechaFin) {
  return new Date(
    new Date(fechaInicio).getTime() +
      Math.random() *
        (new Date(fechaFin).getTime() - new Date(fechaInicio).getTime())
  );
}
function registroAsignatura() {
  const asignatura =
    datosAsignaturas[Math.floor(Math.random() * datosAsignaturas.length)];
  const registroAsignatura = {
    clave: asignatura.clave,
    creditos: generarNumeroAleatorio(4, 8),
    nombre: asignatura.nombre,
    calificacion: generarNumeroAleatorio(0, 100),
    fecha: generarFecha("2021-01-21", "2023-06-30"),
  };

  return registroAsignatura;
}
function formatoFechaCompleta(asignatura) {
  return {
    clave: asignatura.clave,
    creditos: asignatura.creditos,
    nombre: asignatura.nombre,
    calificacion: asignatura.calificacion,
    fecha:
      asignatura.fecha.getDate() +
      "/" +
      (asignatura.fecha.getMonth() + 1) +
      "/" +
      asignatura.fecha.getFullYear(),
  };
}
const fechaLimite = new Date("2023-06-30");
fechaLimite.setMonth(fechaLimite.getMonth() - 6);
const fechaActual = new Date("2023-06-30");
const filtroAsignaturas = historialAsignaturas.filter(function (asignatura) {
  return (
    asignatura.calificacion >= 60 &&
    new Date(asignatura.fecha) > fechaLimite &&
    new Date(asignatura.fecha) <= fechaActual
  );
});

const mapAsignaturas = filtroAsignaturas.map(function (asignatura) {
  return {
    clave: asignatura.clave,
    calificacion: asignatura.calificacion,
    fecha:
      asignatura.fecha.getDate() +
      "/" +
      (asignatura.fecha.getMonth() + 1) +
      "/" +
      asignatura.fecha.getFullYear(),
  };
});
console.log(
  "Asignaturas con calificación mayor o igual a 60 y dentro de la fecha:"
);
console.log(mapAsignaturas);
