import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import usuarioReducer from "./usuarios";
import novedadReducer from "./novedades";
import asistenciasReducer from "./asistencias";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    usuarios: usuarioReducer,
    novedades: novedadReducer,
    asistencias: asistenciasReducer
  },
});

export default store;
