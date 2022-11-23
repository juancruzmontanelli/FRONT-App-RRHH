import react, { useState, Component } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Box, TextInput, Button, select } from "@react-native-material/core";

import { SelectList } from "react-native-dropdown-select-list";

const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 130,
  },
});

const Novedades = () => {
  const [type, setType] = useState("");

  const data = [
    { key: "1", value: "Licencia Vacaciones" },
    { key: "2", value: "Hora Extra" },
    { key: "3", value: "Llegada Tarde" },
    { key: "4", value: "Ausencia" },
    { key: "4", value: "Retiro Fuera de Horario" },
    { key: "4", value: "Ingreso Fuera de Horario  " },
    { key: "4", value: "Ausencia con Aviso" },
    { key: "4", value: "Ausencia sin Aviso" },
    { key: "4", value: "Home Office" },
    { key: "4", value: "Otros" },
    { key: "4", value: "Feriados" },
    { key: "4", value: "Licencia justificada" },
    { key: "4", value: "Licencia por enfermedad" },
    { key: "4", value: "Guardia" },
    { key: "4", value: "Licencia Estudio" },
    { key: "4", value: "Horas Nocturnidad" },
  ];
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
            <Image
              style={styles.logo}
              source={require("../assets/megafono.png")}
            />
            <Text style={{ fontSize: 30, marginBottom: 10 }}>NOVEDADES</Text>
            <View
              style={{
                marginBottom: 25,
                width: 380,
              }}
            >
              <Text style={{ ffontSize: 15, marginBottom: 10 }}>
                {" "}
                Tipo de Novedad
              </Text>
              <SelectList data={data} setSelected={setType} />
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ffff",
                borderBottomWidth: 1,
                paddingLeft: 15,
                paddingRight: 15,
                marginBottom: 25,
              }}
            >
              <TextInput
                placeholder="Fecha de inicio"
                style={{ flex: 1, paddingVertical: 0 }}
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ffff",
                borderBottomWidth: 1,
                paddingLeft: 15,
                paddingRight: 15,
                marginBottom: 25,
              }}
            >
              <TextInput
                placeholder="Fecha de fin"
                style={{ flex: 1, paddingVertical: 0 }}
              ></TextInput>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomColor: "#ffff",
                borderBottomWidth: 1,
                paddingLeft: 15,
                paddingRight: 15,
                marginBottom: 25,
              }}
            >
              <TextInput
                placeholder="Observaciones"
                style={{ flex: 1, paddingVertical: 0 }}
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
              ></Button>
            </View>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Novedades;

// const [selectedDate, setSelectedDate] = useState("");
// const [open, setOpen] = useState(false);

// {open ? (
//     <DatePicker
//     onSelectedChange={date => {
//         setSelectedDate(date)
//         setOpen(false)
//     }}
//       mode="calendar"
//       minuteInterval={30}
//       style={{ borderRadius: 10 }}
//     />
//   ) : (
//     ""
//   )}
//   <Text>{selectedDate}</Text>
//   <Button
//     title="ENVIAR"
//     style={{
//       backgroundColor: "#0072b7",
//       marginTop: 30,
//       width: 130,
//     }}
//     onPress={() => setOpen(!open)}
//   ></Button>
