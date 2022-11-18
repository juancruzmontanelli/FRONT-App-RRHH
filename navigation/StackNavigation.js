import react from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/LoginScreen";
import Home from "../screens/HomeScreen";
import Novedades from "../screens/NovedadesScreen";

const StackScreen = () => {
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
        <Stack.Screen name="GLOBAL NEWS" component={Login} />
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Novedades" component={Novedades} />
      </Stack.Navigator>
    
    )
}

export default StackScreen  