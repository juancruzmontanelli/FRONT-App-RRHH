import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, SafeAreaView, ScrollView, Alert, View } from "react-native";
import { Box, TextInput, Button, select } from "@react-native-material/core";
import { crearDatosLaborales, registro } from "../estados/usuarios";
import { SelectList } from "react-native-dropdown-select-list";

const Registro = ({ navigation }) => {
  const dispatch = useDispatch();
  const [equipo, setEquipo] = useState("");
  const [data, setData] = useState([]);
  const [oficina, setOficina] = useState("");
  const [dataDos, setDataDos] = useState([]);
  const equipos = useSelector((estado) => estado.equipos.equipos);
  const oficinas = useSelector((estado) => estado.oficinas.oficinas);

  const newArrayDos = equipos.map((item) => {
    return { key: item.id, value: item.nombre };
  });

  const newArrayUno = oficinas.map((item) => {
    return { key: item.id, value: item.pais };
  });

  const [Registro, setRegistro] = useState({
    nombre: "",
    apellido: "",
    domicilio: "",
    documento: "",
    telefono: "",
    fechaDeNacimiento: "",
    eMail: "",
    contrasena: "",
  });
  const [Datos, setDatos] = useState({
    fechaDeIngreso: "",
    puesto: "",
    turno: "",
    diasLaborales: "",
    horarioLaboral: "",
    observaciones: "",
    pais: "",
    eMail: "",
    nombre: "",
  });

  const SubmitHandler = () => {
    dispatch(registro(Registro))
      .then(() => {
        dispatch(crearDatosLaborales(Datos));
      })
      .then(() => {
        Alert.alert(
          "Registrar usuario",
          "Registro exitoso!",
          [{ text: "Entendido" }],
          { cancelable: true }
        );
      })
      .catch((error) => {
        Alert.alert(
          "Registrar erroneo",
          error.message,
          [{ text: "Entendido" }],
          {
            cancelable: true,
          }
        );
      });
  };
  console.log(setData, "DATA");
  console.log(oficina);
  const registroNombreHandler = (e) => {
    setRegistro({ ...Registro, nombre: e });
  };

  const registroApellidoHandler = (e) => {
    setRegistro({ ...Registro, apellido: e });
  };

  const registroDomicilioHandler = (e) => {
    setRegistro({ ...Registro, domicilio: e });
  };

  const registroDocumentoHandler = (e) => {
    setRegistro({ ...Registro, documento: e });
  };

  const registroTelefonoHandler = (e) => {
    setRegistro({ ...Registro, telefono: e });
  };

  const registroFechaDeNacimientoHandler = (e) => {
    setRegistro({ ...Registro, fechaDeNacimiento: e });
  };

  const registroEmailHandler = (e) => {
    setRegistro({ ...Registro, eMail: e });
    setDatos({ ...Datos, eMail: e });
  };
  const registroContrasenalHandler = (e) => {
    setRegistro({ ...Registro, contrasena: e });
  };

  const datosFechaDeIngresoHandler = (e) => {
    setDatos({ ...Datos, fechaDeIngreso: e });
  };

  const datosPuestoHandler = (e) => {
    setDatos({ ...Datos, puesto: e });
  };

  const datosTurnoHandler = (e) => {
    setDatos({ ...Datos, turno: e });
  };

  const datosDiasLaboralesHandler = (e) => {
    setDatos({ ...Datos, diasLaborales: e });
  };

  const datosHorariosLaboralesHandler = (e) => {
    setDatos({ ...Datos, horariosLaborales: e });
  };

  const datosObservacionesHandler = (e) => {
    setDatos({ ...Datos, observaciones: e });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f89c1c" }}>
      <ScrollView>
        <Box
          style={{
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, marginBottom: 10 }}>
            Datos del usuario
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              placeholder="Nombre"
              style={{ flex: 1, paddingVertical: 0 }}
              onChangeText={registroNombreHandler}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={registroApellidoHandler}
              placeholder="Apellido"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>

          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={registroDomicilioHandler}
              placeholder="Domicilio"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={registroDocumentoHandler}
              placeholder="Documento"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={registroTelefonoHandler}
              placeholder="Telefono"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={registroFechaDeNacimientoHandler}
              placeholder="Fecha de nacimiento"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={registroEmailHandler}
              placeholder="Email"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={registroContrasenalHandler}
              placeholder="Contraseña"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>
          <Text style={{ fontSize: 30, marginBottom: 10 }}>
            Datos Laborales
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={datosFechaDeIngresoHandler}
              placeholder="Fecha de ingreso"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={datosPuestoHandler}
              placeholder="Puesto"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>
          <View
            style={{
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,

              width: "70%",
              marginBottom: 25,
            }}
          >
            <SelectList
              placeholder="Equipo"
              setSelected={(e) => {
                setEquipo(e);
                setDatos({ ...Datos, nombre: e });
              }}
              data={newArrayDos}
              save="value"
            />
          </View>
          <View
            style={{
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              alignContent: "center",
              marginBottom: 25,

              width: "70%",
            }}
          >
            <SelectList
              placeholder="Oficina"
              setSelected={(e) => {
                setOficina(e);
                setDatos({ ...Datos, pais: e });
              }}
              data={newArrayUno}
              save="value"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={datosTurnoHandler}
              placeholder="Turno"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={datosDiasLaboralesHandler}
              placeholder="Dias laborales"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={datosHorariosLaboralesHandler}
              placeholder="Horarios laborales"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#f89c1c",
              borderBottomWidth: 1,
              paddingLeft: 15,
              paddingRight: 15,
              marginBottom: 25,
            }}
          >
            <TextInput
              onChangeText={datosObservacionesHandler}
              placeholder="Observaciones"
              style={{ flex: 1, paddingVertical: 0 }}
            ></TextInput>
          </View>

          <View>
            <Button
              title="Registrar"
              style={{ backgroundColor: "#0072b7", margin: 10, width: 130 }}
              onPress={SubmitHandler}
            ></Button>
          </View>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registro;
