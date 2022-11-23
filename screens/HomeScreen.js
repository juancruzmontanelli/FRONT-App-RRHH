import { Text, SafeAreaView, Image, StyleSheet, View } from "react-native";
import { Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { Box, Button } from "@react-native-material/core";
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
          marginTop: "10%",
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
            title="Novedades"
            tintColor="#f89c1c"
            titleStyle={{ fontFamily: "Arimo", fontSize: 20 }}
            style={{ backgroundColor: "#0072b7", marginTop: 50, width: 300 }}
            trailing={(props) => <Icon name="send" {...props} />}
            onPress={() => {
              navigation.navigate("Novedades");
            }}
          />
        </View>
        <View>
          <Button
            title="Mi Equipo"
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
        <View>
          <Button
            title="Mi Asistencia"
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
      </Box>
    </SafeAreaView>
  );
};

export default Home;
