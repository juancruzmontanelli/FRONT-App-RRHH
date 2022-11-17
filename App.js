import react from "react";
import { NavigationContainer, Stack } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/LoginScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0072b7",
          },
          headerTintColor: "#f89c1c",
        }}
      >
        <Stack.Screen name="GLOBAL NEWS" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
