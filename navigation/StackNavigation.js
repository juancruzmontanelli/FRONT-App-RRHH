import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/LoginScreen";
import Home from "../screens/HomeScreen";
import Novedades from "../screens/NovedadesScreen";
import User from "../screens/UserScreen";
import VerSolicitudes from "../screens/UserSolicitudes";
import { useDispatch } from "react-redux";
import { Button } from "@react-native-material/core";
import { cerrarSesion } from "../estados/usuarios";
import HistorialAsistencias from "../screens/HistorialAsistencias";

import MiembrosLista from "../screens/MiembrosLista";
import EquiposLista from "../screens/EquiposLista";
import MiembroScreen from "../screens/MiembroScreen";
import Registro from "../screens/RegistroScreen";
import { useSelector } from "react-redux";
import { Alert } from "react-native";
import Oficinas from "../screens/OficinasScreen";
import crearOficina from "../screens/CrearOficina";
import SuperUserSolicitudes from "../screens/superUserSolicitudes";
import CrearEquipo from "../screens/CrearEquipo";

const StackScreen = (navigation) => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

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

      <Stack.Screen name="Mi Equipo" component={MiembrosLista} />
      <Stack.Screen name="Equipos" component={EquiposLista} />
      <Stack.Screen name="Crear Equipo" component={CrearEquipo} />
      <Stack.Screen name="Miembro">
        {(props) => <MiembroScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="HistorialAsistencias"
        component={HistorialAsistencias}
      />
      {/*       <Stack.Screen name="HistorialNovedades" component={HistorialNovedades} /> */}
      <Stack.Screen name="Novedades" component={Novedades} />
      <Stack.Screen name="VerSolicitudes" component={VerSolicitudes} />
      <Stack.Screen
        name="SuperUsuarioNovedades"
        component={SuperUserSolicitudes}
      />
      <Stack.Screen name="Novedad">
        {(props) => <NovedadScreen {...props} novedad={novedad} />}
      </Stack.Screen>
      <Stack.Screen name="Usuario" component={User} />
      <Stack.Screen name="Oficinas" component={Oficinas} />
      <Stack.Screen name="CrearOficina" component={crearOficina} />
    </Stack.Navigator>
  );
};

export default StackScreen;
