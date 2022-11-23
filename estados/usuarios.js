import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const estadoInicial = {
  cargando: true,
  infoDeUsuario: {},
};

export const urlBaseUsuario = axios.create({
  baseURL: `http://192.168.1.36:8080/api/usuarios`,
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
      throw new Error("Credenciales incorrectas");
    },
  },
});

export default usuarioSlice.reducer;
