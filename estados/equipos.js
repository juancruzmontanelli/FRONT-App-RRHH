import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { Alert } from "react-native";
import { urlBaseUsuario } from "./usuarios";

const estadoInicial = {
  cargando: true,
  miembros: [],
  equipos: [],
  miembro: {},
};

export const urlBaseEquipo = axios.create({
  baseURL: `http://192.168.1.41:8080/api/equipos`,
});

export const crearEquipo = createAsyncThunk(
  "CREAR_EQUIPO",
  async (nombreEquipo) => {
    try {
      await urlBaseEquipo.post("/", nombreEquipo);
      return "Equipo creado con éxito";
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const traerEquipo = createAsyncThunk(
  "TRAER_EQUIPO",
  async (idEquipo) => {
    try {
      const equipo = await urlBaseEquipo.get(`/${idEquipo}`);
      return equipo.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const traerMiembroEquipo = createAsyncThunk(
  "TRAER_MIEMBRO_DE_EQUIPO",
  async (idUsuario) => {
    try {
      const miembro = await urlBaseUsuario.get(`/uno/${idUsuario}`);
      return miembro.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const traerTodosLosEquipos = createAsyncThunk(
  "TRAER_EQUIPOS",
  async () => {
    try {
      const equipos = await urlBaseEquipo.get("/");
      return equipos.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const equiposReducer = createReducer(estadoInicial, {
  [traerEquipo.pending]: (estado) => {
    estado.cargando = true;
  },
  [traerEquipo.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    estado.miembros = accion.payload;
  },
  [traerEquipo.rejected]: (estado) => {
    estado.cargando = false;
    Alert.alert(
      "Mi Equipo",
      "Ha ocurrido un error al querer mostrar los miembros del equipo",
      [{ text: "Entendido" }]
    );
  },
  [crearEquipo.pending]: (estado) => {
    estado.cargando = true;
  },
  [crearEquipo.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    
  },
  [crearEquipo.rejected]: (estado) => {
    estado.cargando = false;
    throw new Error("Ha habido un error al querer crear el equipo");
  },
  [traerMiembroEquipo.pending]: (estado) => {
    estado.cargando = true;
  },
  [traerMiembroEquipo.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    estado.miembro = accion.payload;
  },
  [traerMiembroEquipo.rejected]: (estado) => {
    estado.cargando = false;
    Alert.alert(
      "Mi Equipo",
      "Ha ocurrido un error al querer mostrar al miembro del equipo",
      [{ text: "Entendido" }]
    );
  },
  [traerTodosLosEquipos.pending]: (estado) => {
    estado.cargando = true;
  },
  [traerTodosLosEquipos.fulfilled]: (estado, accion) => {
    estado.cargando = false;
    estado.equipos = accion.payload;
  },
  [traerTodosLosEquipos.rejected]: (estado) => {
    estado.cargando = false;
    Alert.alert("Equipos", "Acceso Denegado!", [{ text: "Entendido" }]);
  },
});

export default equiposReducer;
