import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import axios from "axios";

const estadoInicial = {
  cargando: true,
  oficinas: [],
  oficina: {},
  usuariosOficina: [],
};

const urlBaseOficina = axios.create({
  baseURL: `http://192.168.20.28:8080/api/oficinas`, //192.168.0.92
});

export const crearOficina = createAsyncThunk(
  "CREAR_OFICINA",
  async (infoOficina) => {
    try {
      await urlBaseOficina.post("/", infoOficina);
      return "Oficina creada con éxito!";
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const traerOficinas = createAsyncThunk("TRAER_OFICINAS", async () => {
  try {
    const oficinas = await urlBaseOficina.get("/");
    return oficinas.data;
  } catch (error) {
    throw new Error(error);
  }
});

export const actualizarOficina = createAsyncThunk(
  "ACTUALIZAR_OFICINA",
  async (oficinaId, valorNuevo, usuario) => {
    if (usuario.tipo) {
      try {
        await urlBaseOficina.put(`/${oficinaId}`, valorNuevo);
        return "Oficina actualizada con éxito";
      } catch (error) {
        throw new Error(error);
      }
    } else throw new Error("Acceso denegado!");
  }
);

export const traerUsuarioOficinas = createAsyncThunk(
  "TRAER_USUARIOS_OFICINAS",
  async (oficinaId) => {
    try {
      const usuarios = await urlBaseOficina.get(`/${oficinaId}`);
      return usuarios.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const oficinasReducer = createReducer(estadoInicial, {
  [crearOficina.pending]: (estado) => {
    estado.cargando = true;
  },
  [crearOficina.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    Alert.alert("Oficina", accion.payload, [{ text: "Entiendo" }], {
      cancelable: true,
    });
  },
  [crearOficina.rejected]: (estado) => {
    estado.cargando = false;
  },
  [traerOficinas.pending]: (estado) => {
    estado.cargando = true;
  },
  [traerOficinas.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    estado.oficinas = accion.payload;
  },
  [traerOficinas.rejected]: (estado) => {
    estado.cargando = false;
  },
  [actualizarOficina.pending]: (estado) => {
    estado.cargando = true;
  },
  [actualizarOficina.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    Alert.alert("Oficina", accion.payload, [{ text: "Entiendo" }], {
      cancelable: true,
    });
  },
  [actualizarOficina.rejected]: (estado) => {
    estado.cargando = false;
  },
  [traerUsuarioOficinas.pending]: (estado) => {
    estado.cargando = true;
  },
  [traerUsuarioOficinas.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    estado.usuariosOficina = accion.payload;
  },
  [traerUsuarioOficinas.rejected]: (estado) => {
    estado.cargando = false;
  },
});

export default oficinasReducer;
