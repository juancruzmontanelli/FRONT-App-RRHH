import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import novedades from "./novedades";
import usuarioReducer from "./usuarios";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    usuarioReducer,
    novedades,
  },
});

export default store;
