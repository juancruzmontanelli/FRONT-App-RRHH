import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import usuarios from "./usuarios";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    usuarios,
  },
});

export default store;
