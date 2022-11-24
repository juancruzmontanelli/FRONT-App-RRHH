import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const estadoInicial = {
  cargando: true,
  infoDeUsuario: {},
  datosLaborales: {},
};

export const urlBaseUsuario = axios.create({
  baseURL: `http://192.168.1.41:8080/api/usuarios`,
});

export const iniciarSesion = createAsyncThunk(
  "INICIO_SESION",
  async (infoUsuario) => {
    try {
      const usuarioEncontrado = await urlBaseUsuario.post(
        "/iniciosesion",
        infoUsuario
      );
      return usuarioEncontrado.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const traerDatosUsuario = createAsyncThunk(
  "TRAER_INFO_DE_USUARIO",
  async (idUsuario) => {
    try {
      const datosLaborales = await urlBaseUsuario.get(`/uno/${idUsuario}`);
      return datosLaborales.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const usuarioReducer = createReducer(estadoInicial, {
  [iniciarSesion.pending]: (estado) => {
    estado.cargando = true;
  },
  [iniciarSesion.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    estado.infoDeUsuario = accion.payload;
  },
  [iniciarSesion.rejected]: (estado) => {
    estado.cargando = true;
    throw new Error("Credenciales incorrectas");
  },
  [traerDatosUsuario.pending]: (estado) => {
    estado.cargando = true;
  },
  [traerDatosUsuario.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    estado.datosLaborales = accion.payload;
  },
  [traerDatosUsuario.rejected]: (estado) => {
    estado.cargando = true;
    throw new Error("Error de validación!");
  },
});

export default usuarioReducer;
