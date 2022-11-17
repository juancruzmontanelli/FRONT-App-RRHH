import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const estadoInicial = {
  cargando: true,
  infoDeUsuario: {},
};

const urlBaseUsuario = axios.create({
  baseURL: "http://localhost:8080/api/usuarios",
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
      /*alert(error.response.data)*/
      throw new Error(error);
    }
  }
);

const usuarioSlice = createSlice({
  name: "usuarios",
  initialState: estadoInicial,
  reducers: {},
  extraReducers: {
    [iniciarSesion.pending]: (estado) => {
      estado.cargando = true;
    },
    [iniciarSesion.fulfilled]: (estado, accion) => {
      estado.cargando = false;
      estado.infoDeUsuario = accion.payload;
    },
    [iniciarSesion.rejected]: (estado) => {
      estado.cargando = false;
      throw new Error("ERROR");
    },
  },
});

export default usuarioSlice.reducer;
