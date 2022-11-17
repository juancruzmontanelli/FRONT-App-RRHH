import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import axios from "axios";

const estadoInicial = {
  cargando: true,
  novedades: [],
};

const urlBaseNovedad = axios.create({
  baseURL: "http://localhost:8080/api/novedades",
});

export const traerNovedades = createAsyncThunk(
  "TRAER_NOVEDADES",
  async (usuarioId) => {
    try {
      const novedades = await urlBaseNovedad.post("/", usuarioId);
      return novedades;
    } catch (error) {
      /*alert(error.response.data)*/
      throw new Error(error);
    }
  }
);

export const crearNovedad = createAsyncThunk(
  "CREAR_NOVEDAD",
  async (infoNovedad) => {
    try {
      await urlBaseNovedad.post("/", infoNovedad);
      return "Novedad creada con éxito!";
    } catch (error) {
      /*alert(error.response.data)*/
      throw new Error(error);
    }
  }
);

const novedadSlice = createSlice({
  name: "novedades",
  initialState: estadoInicial,
  reducers: {},
  extraReducers: {
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
    [traerNovedades.pending]: (estado) => {
      estado.cargando = true;
    },
    [traerNovedades.fulfilled]: (estado, accion) => {
      estado.cargando = false;
      estado.novedades = accion.payload;
    },
    [traerNovedades.rejected]: (estado) => {
      estado.cargando = false;
    },
  },
});

export default novedadSlice.reducer;
