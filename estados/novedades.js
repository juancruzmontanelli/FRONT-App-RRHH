import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import axios from "axios";

const estadoInicial = {
  cargando: true,
  novedades: [],
  novedad: {},
};

const urlBaseNovedad = axios.create({
  baseURL: `http://192.168.0.80:8080/api/novedades`, //192.168.0.80
});

export const crearNovedad = createAsyncThunk(
  "CREAR_NOVEDAD",
  async (infoNovedad) => {
    try {
      await urlBaseNovedad.post("/", infoNovedad);
      return "Novedad creada con éxito!";
    } catch (error) {
      throw new Error(error);
    }
  }
);
export const traerUnaNovedad = createAsyncThunk(
  "TRAER_UNA_NOVEDAD",
  async (idNovedad) => {
    try {
      const novedad = await urlBaseNovedad.get(`/una/${idNovedad}`);
      return novedad.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const traerTodasNovedades = createAsyncThunk(
  "TRAER_TODAS_NOVEDADES",
  async (usuario) => {
    if (usuario.tipo) {
      try {
        const novedades = await urlBaseNovedad.get(`/`);
        return novedades.data;
      } catch (error) {
        throw new Error(error);
      }
    } else throw new Error("Acceso denegado!");
  }
);

export const traerNovedadesUsuario = createAsyncThunk(
  "TRAER_USUARIO_NOVEDADES",
  async (usuarioId) => {
    try {
      const novedades = await urlBaseNovedad.get(`/${usuarioId}`);
      return novedades.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const actualizarNovedad = createAsyncThunk(
  "ACTUALIZAR_NOVEDAD",
  async (novedadId, usuario) => {
    if (usuario.tipo) {
      try {
        const novedades = await urlBaseNovedad.get(`/${novedadId}`);
        return "Novedad actualizada con éxito";
      } catch (error) {
        throw new Error(error);
      }
    } else throw new Error("Acceso denegado!");
  }
);

const novedadReducer = createReducer(estadoInicial, {
  [crearNovedad.pending]: (estado) => {
    estado.cargando = true;
  },
  [crearNovedad.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    Alert.alert("Novedades", accion.payload, [{ text: "Entiendo" }], {
      cancelable: true,
    });
  },
  [crearNovedad.rejected]: (estado) => {
    estado.cargando = false;
  },
  [traerNovedadesUsuario.pending]: (estado) => {
    estado.cargando = true;
  },
  [traerNovedadesUsuario.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    estado.novedades = accion.payload;
  },
  [traerNovedadesUsuario.rejected]: (estado) => {
    estado.cargando = false;
  },
  [traerTodasNovedades.pending]: (estado) => {
    estado.cargando = true;
  },
  [traerTodasNovedades.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    estado.novedades = accion.payload;
  },
  [traerTodasNovedades.rejected]: (estado) => {
    estado.cargando = false;
    throw new Error("Acceso denegado!");
  },
  [actualizarNovedad.pending]: (estado) => {
    estado.cargando = true;
  },
  [actualizarNovedad.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    Alert.alert("Novedades", accion.payload, [{ text: "Entiendo" }], {
      cancelable: true,
    });
  },
  [actualizarNovedad.rejected]: (estado) => {
    estado.cargando = false;
    throw new Error("Acceso denegado!");
  },
  [traerUnaNovedad.pending]: (estado) => {
    estado.cargando = true;
  },
  [traerUnaNovedad.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    estado.novedad = accion.payload;
  },
  [traerUnaNovedad.rejected]: (estado) => {
    estado.cargando = false;
    throw new Error("Ha ocurrido un error al intentar traer su novedad");
  },
});

export default novedadReducer;
