import { useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Box, ListItem, Text, Button } from "@react-native-material/core";
import { useSelector, useDispatch } from "react-redux";
import { traerDatosUsuario } from "../estados/usuarios";
import Loader from "../componentes/Loader";

const User = () => {
  const dispatch = useDispatch();
  const usuario = useSelector((estado) => estado.usuarios.infoDeUsuario);
  const datosLaborales = useSelector(
    (estado) => estado.usuarios.datosLaborales
  );
  useEffect(() => {
    dispatch(traerDatosUsuario(usuario.id));
  }, []);

  return datosLaborales.perfil && usuario.nombre ? (
    <SafeAreaView>
      <ScrollView>
        <Button
          style={{
            textAlign: "center",
            fontSize: 30,
          }}
          title="EDITA TU INFORMACION"
          color="#0072b7"
          tintColor="#f89c1c"
        />

        <Box>
          <ListItem
            title="Nombre y Apellido"
            meta={`${usuario.nombre} ${usuario.apellido}`}
          />
          <ListItem
            title="Domicilio"
            meta={`${datosLaborales.perfil.domicilio}`}
          />
          <ListItem
            title="Documento"
            meta={`${datosLaborales.perfil.documento}`}
          />
          <ListItem
            title="Telefono"
            meta={`${datosLaborales.perfil.telefono}`}
          />
          <ListItem
            title="Fecha de nacimiento"
            meta={`${datosLaborales.perfil.fechaDeNacimiento}`}
          />
          <ListItem title="Email" meta={`${datosLaborales.perfil.eMail}`} />
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
          <ListItem
            title="Fecha Ingreso"
            meta={`${datosLaborales.datosLaborales.fechaDeIngreso}`}
          />

          <ListItem
            title="Puesto"
            meta={`${datosLaborales.datosLaborales.puesto}`}
          />
          <ListItem
            title="Equipo"
            meta={`${datosLaborales.datosLaborales.equipo}`}
          />
          <ListItem
            title="Turno"
            meta={`${datosLaborales.datosLaborales.turno}`}
          />
          <ListItem
            title="Oficina"
            meta={`${datosLaborales.datosLaborales.oficina}`}
          />
          <ListItem
            title="Dias Laborales"
            meta={`${datosLaborales.datosLaborales.diasLaborales}`}
          />

          <ListItem
            title="Horarios Laborales"
            meta={`${datosLaborales.datosLaborales.horarioLaboral}`}
          />

          <ListItem
            title="Observaciones"
            meta={`${datosLaborales.datosLaborales.observaciones}`}
          />
        </Box>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <Loader />
  );
};

export default User;
