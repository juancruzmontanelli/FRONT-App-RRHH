const keysMiembro = ["Nombre", "Oficina", "Turno", "E-mail", "Estado"];
const dummyNovedades = [
  {
    tipoNovedad: "Vacaciones",
    fechaInicio: "26/12/2022",
    fechaFin: "10/01/2023",
    cantidad: "15",
    observaciones: "",
    autorizadoPor: "pendiente",
    estado: "pendiente",
  },
  {
    tipoNovedad: "Llegada tarde",
    fechaInicio: "26/12/2022",
    fechaFin: "10/01/2023",
    cantidad: "15",
    observaciones: "",
    autorizadoPor: "Santiago Lucero",
    estado: "aprobado",
  },
  {
    tipoNovedad: "Licencia",
    fechaInicio: "26/12/2022",
    fechaFin: "10/01/2023",
    cantidad: "15",
    observaciones: "",
    autorizadoPor: "No autorizado",
    estado: "rechazado",
  },
  {
    tipoNovedad: "Otro",
    fechaInicio: "26/12/2022",
    fechaFin: "10/01/2023",
    cantidad: "15",
    observaciones: "",
    autorizadoPor: "Santiago Lucero",
    estado: "aprobado",
  },
  {
    tipoNovedad: "Accidente Laboral",
    fechaInicio: "26/12/2022",
    fechaFin: "10/01/2023",
    cantidad: "15",
    observaciones: "",
    autorizadoPor: "pendiente",
    estado: "pendiente",
  },
];
const retornarFechaActual = () => {
  const fechaActual = {
    fecha: `${
      String(new Date().getDate()).length === 1
        ? `0${new Date().getDate()}`
        : new Date().getDate()
    }/${
      String(new Date().getMonth() + 1).length === 1
        ? `0${new Date().getMonth() + 1}`
        : new Date().getMonth() + 1
    }/${new Date().getFullYear()}`,
    hora: `${
      String(new Date().getHours()).length === 1
        ? `0${new Date().getHours()}`
        : new Date().getHours()
    }:${
      String(new Date().getMinutes()).length === 1
        ? `0${new Date().getMinutes()}`
        : new Date().getMinutes()
    }hs`,
  };

  return fechaActual;
};

const restablecerFechaActual = {
  fecha: "",
  horaDeIngreso: "",
  horaDeSalida: "",
};

module.exports = {
  keysMiembro,
  dummyNovedades,
  retornarFechaActual,
  restablecerFechaActual,
};
