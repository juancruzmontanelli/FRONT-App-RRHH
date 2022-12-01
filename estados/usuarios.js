import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";
import { Alert } from "react-native";

const estadoInicial = {
  cargando: true,
  infoDeUsuario: {},
  datosLaborales: {},
  ingresoDeUsuario: {},
  ultimoFichaje: {},
};

export const urlBaseUsuario = axios.create({
  baseURL: `http://192.168.0.92:8080/api/usuarios`, //192.168.0.92
});

export const urlBaseDatosLaborales = axios.create({
  baseURL: `http://192.168.1.41:8080/api/datosLaborales`,
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

export const registro = createAsyncThunk("REGISTRO", async (datosUsuario) => {
  try {
    const usuarioRegistrado = await urlBaseUsuario.post(
      "/registro",
      datosUsuario
    );
    return usuarioRegistrado.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const cerrarSesion = createAsyncThunk("CERRAR_SESION", async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    throw "Ha habido un error al cerrar sesión";
  }
});

export const ficharIngreso = createAction("FICHAR_INGRESO");

export const resetearIngreso = createAction("RESETEAR_INGRESO");

export const setearUltimoFichaje = createAction("SETEAR_ULTIMO_FICHAJE");

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

export const crearDatosLaborales = createAsyncThunk(
  "CREEAR_DATOS_LABORALES",
  async (datosLaborales) => {
    try {
      await urlBaseDatosLaborales.post("/", datosLaborales);
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
  [iniciarSesion.rejected]: () => {
    throw new Error("Credenciales incorrectas");
  },
  [cerrarSesion.fulfilled]: (estado) => {
    estado.infoDeUsuario = {};
    estado.datosLaborales = {};
    Alert.alert("Cerrar Sesión", "Su sesión ha sido cerrada con éxito!");
  },
  [ficharIngreso]: (estado, accion) => {
    estado.ingresoDeUsuario = accion.payload;
  },
  [resetearIngreso]: (estado) => {
    estado.ingresoDeUsuario = {};
  },
  [setearUltimoFichaje]: (estado, accion) => {
    estado.ultimoFichaje = accion.payload;
  },
  [cerrarSesion.rejected]: (estado) => {
    Alert.alert(
      "Cerrar Sesión",
      "Ha habido un error al intentar cerrar sesión"
    );
  },
  [traerDatosUsuario.pending]: (estado) => {
    estado.cargando = true;
  },
  [traerDatosUsuario.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    estado.datosLaborales = accion.payload;
  },
  [traerDatosUsuario.rejected]: (estado) => {
    throw new Error("Error de validación!");
  },

  [registro.pending]: (estado) => {
    estado.cargando = true;
  },
  [registro.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    return accion.payload;
  },
  [registro.rejected]: () => {
    throw new Error("Credenciales incorrectas");
  },
});

export default usuarioReducer;
