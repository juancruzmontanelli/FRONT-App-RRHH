const categoriasNovedad = [
  "Tipo de Novedad",
  "Fecha de Inicio",
  "Fecha de Finalización",
  "Cantidad",
  "Observaciones",
  "Autorizado por: ",
];
const dummyNovedades = [
  {
    tipoNovedad: "Vacaciones",
    fechaInicio: "26/12/2022",
    fechaFin: "10/01/2023",
    cantidad: "15",
    observaciones: "",
    autorizadoPor: "pendiente",
    estado:'pendiente'
  },
  {
    tipoNovedad: "Llegada tarde",
    fechaInicio: "26/12/2022",
    fechaFin: "10/01/2023",
    cantidad: "15",
    observaciones: "",
    autorizadoPor: "Santiago Lucero",
    estado:'aprobado'
  },
  {
    tipoNovedad: "Licencia",
    fechaInicio: "26/12/2022",
    fechaFin: "10/01/2023",
    cantidad: "15",
    observaciones: "",
    autorizadoPor: "No autorizado",
    estado:'rechazado'
  },
  {
    tipoNovedad: "Otro",
    fechaInicio: "26/12/2022",
    fechaFin: "10/01/2023",
    cantidad: "15",
    observaciones: "",
    autorizadoPor: "Santiago Lucero",
    estado:'aprobado'
  },
  {
    tipoNovedad: "Accidente Laboral",
    fechaInicio: "26/12/2022",
    fechaFin: "10/01/2023",
    cantidad: "15",
    observaciones: "",
    autorizadoPor: "pendiente",
    estado:'pendiente'
  },
];
const retornarFechaActual = () => {
  const fechaActual = {
    fecha: `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`,
    hora: `${new Date().getHours()}:${new Date().getMinutes()}hs`,
  };

  return fechaActual;
};

const restablecerFechaActual = {
  fecha: "",
  horaDeIngreso: "",
  horaDeSalida: "",
};

module.exports = {
  categoriasNovedad,
  dummyNovedades,
  retornarFechaActual,
  restablecerFechaActual,
};
