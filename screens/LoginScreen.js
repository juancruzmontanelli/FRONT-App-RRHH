import react from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import { Box, TextInput, Button } from "@react-native-material/core";
import { useFonts } from "expo-font";

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
});
const Login = () => {
  const [fontLoaded] = useFonts({
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
          INGRESAR SESION
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
          ></Button>
        </View>
      </Box>
    </SafeAreaView>
  );
};

export default Login;
