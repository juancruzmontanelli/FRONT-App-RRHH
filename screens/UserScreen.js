import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Box, ListItem, Text, Button } from "@react-native-material/core";
import { useSelector } from "react-redux";

const User = () => {
  const estadoUsuario = useSelector((estado) => estado.usuarios);
  const cargando = !estadoUsuario.cargando
    ? estadoUsuario.cargando
    : estadoUsuario._z.cargando;
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    if (estadoUsuario._z) {
      setUsuario(estadoUsuario._z.infoDeUsuario);
    } else
      estadoUsuario.infoDeUsuario.then((usuario) => {
        setUsuario(usuario);
      });
  }, [cargando]);

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
