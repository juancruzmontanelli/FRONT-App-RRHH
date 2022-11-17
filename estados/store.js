import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import usuarios from "./usuarios";
import novedades from "./novedades";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    usuarios,
    novedades
  },
});

export default store;
