import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/LoginScreen";
import Home from "../screens/HomeScreen";
import Novedades from "../screens/NovedadesScreen";
import User from "../screens/UserScreen";
import VerSolicitudes from "../screens/superUserSolicitudes";
import { useDispatch } from "react-redux";
import { Button } from "@react-native-material/core";
import { cerrarSesion } from "../estados/usuarios";
import NovedadScreen from "../screens/NovedadScreen";
import HistorialNovedades from "../screens/HistorialNovedades";
import HistorialAsistencias from "../screens/HistorialAsistencias";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
import DatosUsuario from "../screens/BuscarDatosUsuario";
import ActualizarDatosLaborales from "../screens/EditarDatosLaborales";
import ActualizarUsuario from "../screens/EditarDatosUsuario";

const StackScreen = (navigation) => {
  const dispatch = useDispatch();
  const novedad = useSelector((estado) => estado.novedades.novedad);

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
                Alert.alert(
                  "Cerrar Sesión",
                  "Está seguro que quiere cerrar sesión?",
                  [
                    {
                      text: "OK",
                      onPress: () => {
                        dispatch(cerrarSesion());
                        navigation.navigate("GLOBALNEWS");
                      },
                    },
                    { text: "Cancelar" },
                  ]
                );
              }}
            />
          ),
        })}
      />
      <Stack.Screen name="GLOBAL NEWS" component={Login} />

      <Stack.Screen
        name="HistorialAsistencias"
        component={HistorialAsistencias}
      />
      <Stack.Screen name="HistorialNovedades" component={HistorialNovedades} />
      <Stack.Screen name="Novedades" component={Novedades} />
      <Stack.Screen name="VerSolicitudes" component={VerSolicitudes} />
      <Stack.Screen name="Novedad">
        {(props) => <NovedadScreen {...props} novedad={novedad} />}
      </Stack.Screen>
      <Stack.Screen name="Usuario" component={User} />
      <Stack.Screen name="ActualizarUsuario" component={ActualizarUsuario} />
      <Stack.Screen name="DatosUsuario" component={DatosUsuario} />
      <Stack.Screen
        name="ActualizarDatosLaborales"
        component={ActualizarDatosLaborales}
      />
    </Stack.Navigator>
  );
};

export default StackScreen;
