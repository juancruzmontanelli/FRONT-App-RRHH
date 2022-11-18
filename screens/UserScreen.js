import react from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Box, ListItem, Text, Button } from "@react-native-material/core";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";

const User = () => {
  const usuario = useSelector((estado) => estado.usuarios.infoDeUsuario);
  const [fontLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo.ttf"),
  });
  return (
    <SafeAreaView>
      <Button
        style={{
          textAlign: "center",
          fontFamily: "Arimo",
          fontSize: 30,
        }}
        title="EDITA TU INFORMACION"
        color="#0072b7"
        tintColor="#f89c1c"
      />
      <ScrollView>
        <Box>
          <ListItem
            title="Nombre y Apellido"
            meta={`${usuario.nombre} ${usuario.apellido}`}
          />
          <ListItem title="Domicilio" meta={`${usuario.domicilio}`} />
          <ListItem title="Documento" meta={`${usuario.documento}`} />
          <ListItem title="Telefono" meta={`${usuario.telefono}`} />
          <ListItem
            title="Fecha de nacimiento"
            meta={`${usuario.fechaDeNacimiento}`}
          />
          <Text
            style={{
              fontFamily: "Arimo",
              fontSize: 20,
              textAlign: "center",
              backgroundColor: "#0072b7",
              color: "#f89c1c",
            }}
          >
            DATOS LABORALES
          </Text>
          <ListItem title="Fecha Ingreso" meta={`${usuario.fechaDeIngreso}`} />
          <ListItem title="Puesto" meta={`${usuario.puesto}`} />
          <ListItem title="Equipo" meta={`${usuario.equipo}`} />
          <ListItem title="Turno" meta={`${usuario.turno}`} />
          <ListItem
            title="Horarios Laborales"
            meta={`${usuario.diasLaborales}`}
          />
          <ListItem
            title="Dias Laborales"
            meta={`${usuario.horariosLaborales}`}
          />
          <ListItem title="Observaciones" meta={`${usuario.observaciones}`} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;
