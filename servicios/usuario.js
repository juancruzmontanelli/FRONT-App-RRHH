import AsyncStorage from "@react-native-async-storage/async-storage";

export const traerInfoDeUsuario = async () => {
  try {
    const usuario = JSON.parse(await AsyncStorage.getItem("usuario"));
    return usuario;
  } catch (error) {
    throw new Error(error);
  }
};
