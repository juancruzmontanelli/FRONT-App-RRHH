import { configureStore } from "@reduxjs/toolkit";
import usuarioReducer from "./usuarios";
import novedadReducer from "./novedades";
import asistenciasReducer from "./asistencias";
import equiposReducer from "./equipos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
  reducer: {
    usuarios: persistReducer(persistConfig, usuarioReducer),
    novedades: novedadReducer,
    asistencias: asistenciasReducer,
    equipos: equiposReducer,
  },
});

export const persistor = persistStore(store);
export default store;
