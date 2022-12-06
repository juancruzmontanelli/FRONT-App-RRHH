import { useState } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Box, TextInput, Button } from "@react-native-material/core";
import { useSelector, useDispatch } from "react-redux";
import { editarDatosUsuario, traerUsuarioXEmail } from "../estados/usuarios";

const ActualizarUsuario = ({ navigation }) => {
  const dispatch = useDispatch();
  const perfil = useSelector((estado) => estado.usuarios.datos.perfil);
  const [Usuario, setUsuario] = useState({
    nombre: perfil.nombre,
    apellido: perfil.apellido,
    domicilio: perfil.domicilio,
    documento: perfil.documento,
    telefono: perfil.telefono,
    fechaDeNacimiento: perfil.fechaDeNacimiento,
    eMail: perfil.eMail,
  });
  const SubmitHandler = () => {
    dispatch(editarDatosUsuario({ id: perfil.id, Usuario: Usuario }))
      .then(() => {
        Alert.alert("Datos Actualizados!");
        dispatch(traerUsuarioXEmail(Usuario.eMail)).then(() => {
          navigation.navigate("DatosUsuario");
        });
      })
      .catch((error) => {
        Alert.alert("No se pudieron actualizar Datos", error.message);
      });
  };

  //Handler
  const cambiarNombre = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, nombre: e });
  };
  const cambiarApellido = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, apellido: e });
  };
  const cambiarDomicilioHandler = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, domicilio: e });
  };
  const cambiarDocumentoHandler = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, documento: e });
  };
  const cambiarTelefonoHandler = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, telefono: e });
  };
  const cambiarFechaNacHandler = (e) => {
    setUsuario({
      ...Usuario,
      ...Usuario.usuario,
      fechaDeNacimiento: e,
    });
  };
  const cambiarEMailHandler = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, eMail: e });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <KeyboardAvoidingView>
        <ScrollView>
          <Box
            style={{
              marginTop: "10%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 30, marginBottom: 10 }}>
              Editar Datos Personales
            </Text>
            <View
              style={{
                marginBottom: 25,
                width: 380,
              }}
            >
              <Text>Nombre</Text>
              <TextInput
                onChangeText={cambiarNombre}
                placeholder="Nombre"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.nombre}
              ></TextInput>
              <Text>Apellido</Text>
              <TextInput
                onChangeText={cambiarApellido}
                placeholder="Apellido"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.apellido}
              ></TextInput>
              <Text>Domicilio</Text>
              <TextInput
                onChangeText={cambiarDomicilioHandler}
                placeholder="Domicilio"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.domicilio}
              ></TextInput>
              <Text>Documento</Text>
              <TextInput
                onChangeText={cambiarDocumentoHandler}
                placeholder="Documento"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.documento}
                editable={Usuario.tipo ? true : false}
              ></TextInput>
              <Text>Telefono</Text>
              <TextInput
                onChangeText={cambiarTelefonoHandler}
                placeholder="Telefono"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.telefono}
              ></TextInput>
              <Text>Fecha de Nacimiento</Text>
              <TextInput
                onChangeText={cambiarFechaNacHandler}
                placeholder="Fecha de nacimiento"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.fechaDeNacimiento}
                editable={Usuario.tipo ? true : false}
              ></TextInput>
              <Text>Email</Text>
              <TextInput
                onChangeText={cambiarEMailHandler}
                placeholder="Email"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.eMail}
                editable={Usuario.tipo ? true : false}
              ></TextInput>
            </View>

            <View>
              <Button
                title="ENVIAR"
                style={{
                  backgroundColor: "#0072b7",
                  marginTop: 30,
                  width: 130,
                }}
                onPress={SubmitHandler}
              ></Button>
            </View>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default ActualizarUsuario;
