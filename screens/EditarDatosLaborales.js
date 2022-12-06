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
import { editarDatosLaborales } from "../estados/usuarios";

const ActualizarDatosLaborales = ({ navigation }) => {
  const dispatch = useDispatch();
  const perfil = useSelector((estado) => estado.usuarios.datos.datosLaborales);
  const usuario = useSelector((estado) => estado.usuarios.datos.perfil);
  const [Usuario, setUsuario] = useState({
    fechaDeIngreso: perfil.fechaDeIngreso,
    puesto: perfil.puesto,
    equipo: perfil.equipo,
    turno: perfil.turno,
    oficina: perfil.oficina,
    diasLaborales: perfil.diasLaborales,
    horarioLaborales: perfil.horariosLaborales,
    observaciones: perfil.observaciones,
  });
  const SubmitHandler = () => {
    dispatch(editarDatosLaborales({ id: 2, Usuario: Usuario }))
      .then(() => {
        Alert.alert("Datos Actualizados!");
      })
      .catch((error) => {
        Alert.alert("No se pudieron actualizar Datos", error.message);
      });
    navigation.navigate("DatosUsuario");
  };

  //Handler
  const fechaDeIngresoHandler = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, fechaDeIngreso: e });
  };
  const puestoHandler = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, puesto: e });
  };
  const equipoHandler = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, equipo: e });
  };
  const turnoHandler = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, turno: e });
  };
  const oficinaHandler = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, oficina: e });
  };
  const diasLaboralesHandler = (e) => {
    setUsuario({
      ...Usuario,
      ...Usuario.usuario,
      diasLaborales: e,
    });
  };
  const horarioLaboralHandler = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, horarioLaboral: e });
  };
  const observacionesHandler = (e) => {
    setUsuario({ ...Usuario, ...Usuario.usuario, observaciones: e });
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
              Editar Datos Laborales
            </Text>
            <View
              style={{
                marginBottom: 25,
                width: 380,
              }}
            >
              <Text>Fecha de Ingreso</Text>
              <TextInput
                onChangeText={fechaDeIngresoHandler}
                placeholder="Fecha de Ingreso"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.fechaDeIngreso}
              ></TextInput>
              <Text>Puesto</Text>
              <TextInput
                onChangeText={puestoHandler}
                placeholder="Puesto"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.puesto}
              ></TextInput>
              <Text>Equipo</Text>
              <TextInput
                onChangeText={equipoHandler}
                placeholder="Equipo"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.equipo}
              ></TextInput>
              <Text>Turno</Text>
              <TextInput
                onChangeText={turnoHandler}
                placeholder="Turno"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.turno}
              ></TextInput>
              <Text>Oficina</Text>
              <TextInput
                onChangeText={oficinaHandler}
                placeholder="Oficina"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.oficina}
              ></TextInput>
              <Text>Dias Laborales</Text>
              <TextInput
                onChangeText={diasLaboralesHandler}
                placeholder="Dias Laborales"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.diasLaborales}
              ></TextInput>
              <Text>Horario Laboral</Text>
              <TextInput
                onChangeText={horarioLaboralHandler}
                placeholder="Horario Laboral"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.horarioLaborales}
              ></TextInput>
              <Text>Observaciones</Text>
              <TextInput
                onChangeText={observacionesHandler}
                placeholder="Observaciones"
                style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                value={Usuario.observaciones}
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
export default ActualizarDatosLaborales;
