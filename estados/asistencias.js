import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { Alert } from "react-native";

const estadoInicial = {
  cargando: true,
  asistencias: [],
};

export const urlBaseAsistencia = axios.create({
  baseURL: `http://10.10.10.103:8080/api/asistencias`,
});

export const crearAsistencia = createAsyncThunk(
  "CREAR_ASISTENCIA",
  async (usuarioId, datosAsistencia) => {
    try {
      urlBaseAsistencia.post("/", { usuarioId, datosAsistencia });
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const traerAsistencias = createAsyncThunk(
  "HISTORIAL_ASISTENCIAS",
  async (usuarioId) => {
    try {
      const historialDeAsistencias = await urlBaseAsistencia.post(
        "/historial",
        {usuarioId}
      );
      return historialDeAsistencias.data
    } catch (error) {
      throw new Error(error);
    }
  }
);

const asistenciasReducer = createReducer(estadoInicial, {
  [crearAsistencia.pending]: (estado) => {
    estado.cargando = true;
  },
  [crearAsistencia.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    Alert.alert("Asistencias", "Asistencia registrada con éxito!", [
      { text: "Entendido" },
    ]);
  },
  [crearAsistencia.rejected]: (estado) => {
    estado.cargando = false;
    throw new Error("Ha ocurrido un error al querer registrar la asistencia");
  },
  [traerAsistencias.pending]: (estado) => {
    estado.cargando = true;
  },
  [traerAsistencias.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    estado.asistencias = accion.payload;
  },
  [traerAsistencias.rejected]: (estado) => {
    estado.cargando = false;
    throw new Error(
      "Ha ocurrido un error al querer retornar el historial de asistencias"
    );
  },
});

export default asistenciasReducer;
