import react from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Box, ListItem, Text, Button } from "@react-native-material/core";
import { useFonts } from "expo-font";
const User = () => {
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
          <ListItem title="Apellido y nombres" meta="Diego Armando Maradona" />
          <ListItem title="Domicilio" meta="Segurola y habana 4310" />
          <ListItem title="Documento" meta="42976323" />
          <ListItem title="Telefono" meta="2226 432123" />
          <ListItem title="Fecha de nacimiento" meta="30/10/1960" />
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
          <ListItem title="Fecha Ingreso" meta="12/6/2010" />
          <ListItem title="Puesto" meta="Seguridad" />
          <ListItem title="Equipo" meta="Boca Juniors" />
          <ListItem title="Oficina" meta="La bombonera" />
          <ListItem title="Turno" meta="Tarde Y noche" />
          <ListItem title="Dias Horarios Laborales" meta="De lunes a viernes" />
          <ListItem title="Observaciones" meta="Juega bien al fulbo" />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;
