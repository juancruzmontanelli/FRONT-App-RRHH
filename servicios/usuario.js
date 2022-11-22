import AsyncStorage from "@react-native-async-storage/async-storage";

export const traerInfoDeUsuario = async () => {
  const jsonUsuario = await AsyncStorage.getItem("usuario");
  const usuario = jsonUsuario ? JSON.parse(jsonUsuario) : null;
  return usuario;
};
