import react from "react";
import { NavigationContainer, Stack } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/LoginScreen";
import { Provider } from "react-redux";
import store from "./estados/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
