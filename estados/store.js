import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import novedades from "./novedades";
import usuarioReducer from "./usuarios";
import novedadReducer from "./novedades";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    usuarios: usuarioReducer,
    novedades: novedadReducer,
  },
});

export default store;
