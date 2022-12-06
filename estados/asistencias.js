import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { Alert } from "react-native";

const estadoInicial = {
  cargando: true,
  asistencias: [],
};

export const urlBaseAsistencia = axios.create({

  baseURL: `http://192.168.20.28:8080/api/asistencias`, //192.168.0.92//192.168.1.36

});

export const crearAsistencia = createAsyncThunk(
  "CREAR_ASISTENCIA",
  async (idUsuarioYdatosAsistencia) => {
    const { usuarioId } = idUsuarioYdatosAsistencia;
    const { datosAsistencia } = idUsuarioYdatosAsistencia;
    try {
      await urlBaseAsistencia.post("/", { usuarioId, datosAsistencia });
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
        { usuarioId }
      );
      return historialDeAsistencias.data;
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
