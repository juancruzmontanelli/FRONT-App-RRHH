import react from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Box, TextInput, Button } from "@react-native-material/core";
import { useFonts } from "expo-font";

const Home = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo.ttf"),
  });

  const styles = StyleSheet.create({
    logo: {
      width: 150,
      height: 150,
    },
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <Box
        style={{
          marginTop: "20%",
          alignItems: "center",
        }}
      >
        <Image style={styles.logo} source={require("../assets/globlal.png")} />
        <View>
          <Button
            title="Mi Perfil"
            tintColor="#f89c1c"
            titleStyle={{ fontFamily: "Arimo", fontSize: 20 }}
            style={{ backgroundColor: "#0072b7", marginTop: 50, width: 300 }}
            trailing={(props) => (
              <Avatar
                icon={(props) => <Icon name="account" {...props} />}
                size={26}
                color={"#f89c1c"}
              />
            )}
            onPress={() => {
              navigation.navigate("Usuario");
            }}
          />
        </View>
        <View style={{ flexDirection: "row", paddingHorizontal: 4 / -2 }}>
          <Button
            title="Solicitar Novedad"
            tintColor="#f89c1c"
            titleStyle={{ fontFamily: "Arimo", fontSize: 13 }}
            style={{
              backgroundColor: "#0072b7",
              marginTop: 50,
              width: "45%",
              marginHorizontal: 4 / 2,
            }}
            trailing={(props) => <Icon name="send" {...props} />}
            onPress={() => {
              navigation.navigate("Novedades");
            }}
          />
          <Button
            title="Historial de Novedades"
            tintColor="#f89c1c"
            titleStyle={{ fontFamily: "Arimo", fontSize: 13 }}
            style={{
              backgroundColor: "#0072b7",
              marginTop: 50,
              width: "45%",
              marginHorizontal: 4 / 2,
            }}
            trailing={(props) => <Icon name="history" {...props} />}
            onPress={() => {
              navigation.navigate("HistorialNovedades");
            }}
          />
        </View>
        <View>
          <Button
            title="Tu Actividad"
            tintColor="#f89c1c"
            titleStyle={{ fontFamily: "Arimo", fontSize: 20 }}
            style={{ backgroundColor: "#0072b7", marginTop: 50, width: 300 }}
            trailing={(props) => <Icon name="calendar" {...props} />}
          />
        </View>
        <View>
          <Button
            title="Empleados"
            tintColor="#f89c1c"
            titleStyle={{ fontFamily: "Arimo", fontSize: 20 }}
            style={{ backgroundColor: "#0072b7", marginTop: 50, width: 300 }}
            trailing={(props) => (
              <Avatar
                icon={(props) => <Icon name="account" {...props} />}
                size={26}
                color={"#f89c1c"}
              />
            )}
          />
        </View>
        <View style={{ flexDirection: "row", paddingHorizontal: 4 / -2 }}>
          <Button
            title="Fichar Ingreso"
            tintColor="#f89c1c"
            titleStyle={{ fontFamily: "Arimo", fontSize: 13 }}
            style={{
              backgroundColor: "#0072b7",
              marginTop: 50,
              width: "45%",
              marginHorizontal: 4 / 2,
            }}
            trailing={(props) => <Icon name="send" {...props} />}
            onPress={() => {
              Alert.alert("Ingreso", "Hora de ingreso: 08:32", [
                { text: "Entendido" },
              ]);
            }}
          />
          <Button
            title="Fichar Salida"
            tintColor="#f89c1c"
            titleStyle={{ fontFamily: "Arimo", fontSize: 13 }}
            style={{
              backgroundColor: "#0072b7",
              marginTop: 50,
              width: "45%",
              marginHorizontal: 4 / 2,
            }}
            trailing={(props) => <Icon name="history" {...props} />}
            onPress={() => {
              Alert.alert(
                "Salida",
                "Hora de ingreso: 08:32 \n Hora de salida: 17:20",
                [{ text: "Entendido" }]
              );
            }}
          />
        </View>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
