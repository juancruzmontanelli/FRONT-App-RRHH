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
import { useFonts } from "expo-font";
import { SelectList } from "react-native-dropdown-select-list";

const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 130,
  },
  novedadContainer: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});

const Novedades = () => {
  const [type, setType] = useState("");

  const data = [
    { key: "1", value: "Licencia Vacaciones" },
    { key: "2", value: "Hora Extra" },
    { key: "3", value: "Llegada Tarde" },
    { key: "4", value: "Ausencia" },
    { key: "5", value: "Retiro Fuera de Horario" },
    { key: "6", value: "Ingreso Fuera de Horario  " },
    { key: "7", value: "Ausencia con Aviso" },
    { key: "8", value: "Ausencia sin Aviso" },
    { key: "9", value: "Home Office" },
    { key: "10", value: "Otros" },
    { key: "11", value: "Feriados" },
    { key: "12", value: "Licencia justificada" },
    { key: "13", value: "Licencia por enfermedad" },
    { key: "14", value: "Guardia" },
    { key: "15", value: "Licencia Estudio" },
    { key: "15", value: "Horas Nocturnidad" },
  ];
  return (
    <SafeAreaView style={styles.novedadContainer}>
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
            <Text
              style={{ fontFamily: "Arimo", fontSize: 30, marginBottom: 10 }}
            >
              NOVEDADES
            </Text>
            <View
              style={{
                marginBottom: 25,
                width: 380,
              }}
            >
              <Text
                style={{ fontFamily: "Arimo", fontSize: 15, marginBottom: 10 }}
              >
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
