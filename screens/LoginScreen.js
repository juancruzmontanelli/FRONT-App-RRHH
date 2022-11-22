import react, { useEffect, useState } from "react";
import { iniciarSesion } from "../estados/usuarios";
import { useSelector, useDispatch } from "react-redux";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Box, TextInput, Button } from "@react-native-material/core";
import { useFonts } from "expo-font";

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
});
const Login = ({ navigation }) => {
  const usuario = useSelector((estado) => estado.usuarios);
  const [Login, setLogin] = useState({ eMail: "", contrasena: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.navigate("Inicio");
  }, [usuario.cargando]);
  const LoginEmailHandler = (e) => {
    setLogin({ ...Login, eMail: e });
  };
  const LoginContrasenalHandler = (e) => {
    setLogin({ ...Login, contrasena: e });
  };

  const SubmitHandler = () => {
    dispatch(iniciarSesion(Login))
      .then(() => {
        Alert.alert(
          "Inicio de Sesión",
          "Inicio de sesión exitoso!",
          [{ text: "Entendido" }],
          { cancelable: true }
        );
        navigation.navigate("Inicio");
      })
      .catch((error) => {
        Alert.alert(
          "Inicio de Sesión",
          error.message,
          [{ text: "Entendido" }],
          { cancelable: true }
        );
      });
  };

  const [fontsLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo.ttf"),
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f89c1c" }}>
      <Box
        style={{
          marginTop: "20%",
          alignItems: "center",
        }}
      >
        <Image style={styles.logo} source={require("../assets/globlal.png")} />
        <Text style={{ fontFamily: "Arimo", fontSize: 30, marginBottom: 10 }}>
          INICIAR SESIÓN
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#f89c1c",
            borderBottomWidth: 1,
            paddingLeft: 15,
            paddingRight: 15,
            marginBottom: 25,
          }}
        >
          <TextInput
            onChangeText={LoginEmailHandler}
            placeholder="Mail"
            style={{ flex: 1, paddingVertical: 0 }}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#f89c1c",
            borderBottomWidth: 1,
            paddingLeft: 15,
            paddingRight: 15,
            marginBottom: 25,
          }}
        >
          <TextInput
            onChangeText={LoginContrasenalHandler}
            placeholder="Contrasena"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ color: "blue" }}>Olvido su contraseña?</Text>
        </TouchableOpacity>
        <View>
          <Button
            title="ENTRAR"
            style={{ backgroundColor: "#0072b7", marginTop: 30, width: 130 }}
            onPress={SubmitHandler}
          ></Button>
        </View>
      </Box>
    </SafeAreaView>
  );
};

export default Login;
