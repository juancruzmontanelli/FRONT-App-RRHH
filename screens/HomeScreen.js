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

const Home = ({ navigation }) => {
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
            titleStyle={{ fontSize: 20 }}
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
        <View>
          <Button
            title="Novedades"
            tintColor="#f89c1c"
            titleStyle={{ fontSize: 20 }}
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
            titleStyle={{ fontSize: 20 }}
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
            titleStyle={{ fontSize: 20 }}
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
        {/* <View>
          <Button
            title="Cerrar sesion"
            tintColor="#f89c1c"
            titleStyle={{ fontSize: 20 }}
            style={{ backgroundColor: "#0072b7", marginTop: 50, width: 300 }}
            trailing={(props) => <Icon name="close" {...props} />}
            onPress={() => {
              navigation.navigate("GLOBALNEWS");
            }}
          />
        </View> */}
      </Box>
    </SafeAreaView>
  );
};

export default Home;
