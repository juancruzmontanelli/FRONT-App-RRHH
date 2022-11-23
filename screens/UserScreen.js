import react, { useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Box, ListItem, Text, Button } from "@react-native-material/core";


import { useSelector } from "react-redux";

const User = () => {
  const usuario = useSelector((estado) => estado.usuarios.infoDeUsuario);
  console.log(usuario);


import { useDispatch, useSelector } from "react-redux";
import { traerAsistencias } from "../estados/asistencias";

const User = () => {
  const usuario = useSelector((estado) => estado.usuarios);

  const [fontsLoaded] = useFonts({
    Arimo: require("../assets/fonts/Arimo.ttf"),
  });

  return (
    <SafeAreaView>
      <Button
        style={{
          textAlign: "center",

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
            meta={`${usuario._z.nombre} ${usuario._z.apellido}`}
          />
          <ListItem title="Domicilio" meta={`${usuario._z.domicilio}`} />
          <ListItem title="Documento" meta={`${usuario._z.documento}`} />
          <ListItem title="Telefono" meta={`${usuario._z.telefono}`} />
          <ListItem
            title="Fecha de nacimiento"
            meta={`${usuario._z.fechaDeNacimiento}`}
          />
          <Text
            style={{
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
