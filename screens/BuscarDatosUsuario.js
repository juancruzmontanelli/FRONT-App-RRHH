import { useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView } from "react-native";
import { Box, ListItem, Text, Button } from "@react-native-material/core";
import { useSelector, useDispatch } from "react-redux";
import { traerUsuarioXEmail } from "../estados/usuarios";
import * as React from "react";
import { Searchbar } from "react-native-paper";

const DatosUsuario = ({ navigation }) => {
  const dispatch = useDispatch();
  const [eMail, setEMail] = useState("");
  const [usuarioEncontrado, setUsuarioEncontrado] = useState("");

  const onChangeSearch = (query) => setEMail(query);
  const usuario = useSelector((estado) => estado.usuarios.datos.perfil);
  const datosLaborales = useSelector(
    (estado) => estado.usuarios.datos.datosLaborales
  );

  return !usuarioEncontrado ? (
    <SafeAreaView>
      <ScrollView>
        <Searchbar
          placeholder="Buscar Usuario por Email"
          onChangeText={onChangeSearch}
          value={eMail}
        />
        <Button
          style={{
            textAlign: "center",
            color: "#0072b7",
            tintColor: "#f89c1c",
            fontSize: 30,
          }}
          title="Buscar"
          onPress={() => {
            dispatch(traerUsuarioXEmail(eMail))
              .then((usuario) => {
                Alert.alert("Usuario Encontrado!");
                setUsuarioEncontrado(usuario);
              })
              .catch((error) => {
                Alert.alert("No se pudo encontrar Usuario", error.message);
              });
          }}
        />
      </ScrollView>
    </SafeAreaView>
  ) : (
    <SafeAreaView>
      <ScrollView>
        <Searchbar
          placeholder="Buscar Usuario por Email"
          onChangeText={onChangeSearch}
          value={eMail}
        />
        <Button
          style={{
            textAlign: "center",
            color: "#0072b2",
            tintColor: "#f89c1c",
            fontSize: 30,
            margin: 2,
          }}
          title="Buscar"
          onPress={() => {
            dispatch(traerUsuarioXEmail(eMail))
              .then((usuario) => {
                Alert.alert("Usuario Encontrado!");
                setUsuarioEncontrado(usuario);
              })
              .catch((error) => {
                Alert.alert("No se pudo encontrar Usuario", error.message);
              });
          }}
        />
        <Button
          style={{
            textAlign: "center",
            color: "#0072b7",
            tintColor: "#f89c1c",
            fontSize: 30,
          }}
          title="EDITAR INFORMACION"
          onPress={() => {
            navigation.navigate("ActualizarUsuario");
          }}
        />
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
          <ListItem title="Email" meta={`${usuario.eMail}`} />
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              backgroundColor: "#0072b7",
              color: "#f89c1c",
            }}
          >
            <Button
              style={{
                textAlign: "center",
                color: "#0072b7",
                tintColor: "#f89c1c",
                fontSize: 30,
              }}
              title="EDITAR DATOS LABORALES"
              onPress={() => {
                navigation.navigate("ActualizarDatosLaborales");
              }}
            />
          </Text>
          <ListItem
            title="Fecha Ingreso"
            meta={`${datosLaborales.fechaDeIngreso}`}
          />

          <ListItem title="Puesto" meta={`${datosLaborales.puesto}`} />
          <ListItem title="Equipo" meta={`${datosLaborales.equipo}`} />
          <ListItem title="Turno" meta={`${datosLaborales.turno}`} />
          <ListItem title="Oficina" meta={`${datosLaborales.oficina}`} />
          <ListItem
            title="Dias Laborales"
            meta={`${datosLaborales.diasLaborales}`}
          />

          <ListItem
            title="Horarios Laborales"
            meta={`${datosLaborales.horarioLaboral}`}
          />

          <ListItem
            title="Observaciones"
            meta={`${datosLaborales.observaciones}`}
          />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DatosUsuario;
