import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/LoginScreen";
import Home from "../screens/HomeScreen";
import Novedades from "../screens/NovedadesScreen";
import User from "../screens/UserScreen";
import { Button } from "@react-native-material/core";

const StackScreen = (navigation) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0072b7",
        },

        headerTintColor: "#f89c1c",
      }}
    >
      <Stack.Screen name="GLOBALNEWS" component={Login} />
      <Stack.Screen
        name="Inicio"
        component={Home}
        options={({ navigation, route }) => ({
          headerBackVisible: false,
          headerRight: () => (
            <Button
              color="#f89c1c"
              title="Cerrar sesion"
              onPress={() => {
                navigation.navigate("GLOBALNEWS");
              }}
            />
          ),
        })}
      />
      <Stack.Screen name="Novedades" component={Novedades} />
      <Stack.Screen name="Usuario" component={User} />
    </Stack.Navigator>
  );
};

export default StackScreen;
