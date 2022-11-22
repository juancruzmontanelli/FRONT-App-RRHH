import { createSlice, createAsyncThunk, createReducer} from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { traerInfoDeUsuario } from "../servicios/usuario";

import { Alert } from "react-native";

const usuarioLogueado = traerInfoDeUsuario();
const estadoInicial = usuarioLogueado
  ? {
      cargando: false,
      infoDeUsuario: usuarioLogueado,
    }
  : {
      cargando: true,
      infoDeUsuario: {},
    };

export const urlBaseUsuario = axios.create({
  baseURL: `http://10.10.10.103:8080/api/usuarios`,
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

const usuarioReducer = createReducer(estadoInicial, {
  [iniciarSesion.pending]: (estado) => {
    estado.cargando = true;
  },
  [iniciarSesion.fulfilled]: async (estado, accion) => {
    estado.cargando = false;
    estado.infoDeUsuario = accion.payload;
    await AsyncStorage.setItem("usuario", JSON.stringify(accion.payload));
  },
  [iniciarSesion.rejected]: (estado) => {
    estado.cargando = false;
    throw new Error("Credenciales incorrectas");
  },
});

export default usuarioReducer;
