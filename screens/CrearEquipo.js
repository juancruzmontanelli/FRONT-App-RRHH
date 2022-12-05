import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Button } from "@react-native-material/core";
import { crearEquipo } from "../estados/equipos";

function CrearEquipo({navigation}) {
  const dispatch = useDispatch();
  const [nombreEquipo, setNombreEquipo] = useState("");

  const inputHandler = (e) => {
    setNombreEquipo(e);
  };
  const submitHandler = () => {
    dispatch(crearEquipo({ nombre: nombreEquipo }))
      .then(() => {
        Alert.alert("Crear Equipo", "Equipo creado con éxito");
        navigation.navigate('Equipos')
      })
      .catch((error) => {
        Alert.alert("Crear Equipo", error.message);
      });
  };
  return (
    <View style={styles.crearEquipoRoot}>
      <View style={styles.crearEquipoContainer}>
        <Text style={styles.crearEquipoTitle}>Crear Equipo</Text>
        <TextInput
          style={styles.crearEquipoInput}
          onChangeText={inputHandler}
          placeholder="Ingrese el nombre del equipo.."
          placeholderTextColor={"white"}
          value={nombreEquipo}
        />
        <Button
          title="Enviar"
          style={styles.crearEquipoSubmit}
          titleStyle={{ fontWeight: "400" }}
          tintColor="black"
          color="#f89c1c"
          onPress={() => {
            Alert.alert(
              "Crear Equipo",
              `Está seguro que quiere crear el equipo '${nombreEquipo}'?`,
              [
                {
                  text: "Aceptar",
                  onPress: () => {
                    submitHandler()
                    
                  },
                },
                {
                  text: "Cancelar",
                  onPress: () => {
                    setNombreEquipo("");
                  },
                },
              ],

              {
                onDismiss: () => {
                  setNombreEquipo("");
                },
                cancelable: true,
              }
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  crearEquipoRoot: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 114, 183, 0.6)",
  },
  crearEquipoContainer: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "rgba(0, 114, 183, 0.5)",
  },
  crearEquipoTitle: {
    fontSize: 30,
    color: "#f89c1c",
  },
  crearEquipoInput: {
    fontSize: 20,
    marginVertical: 30,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.1,
    borderRightWidth: 0.1,
    padding: 10,
    borderRadius: 5,
    color: "white",
    fontWeight: "300",
    borderColor: "#f89c1c",
  },
  crearEquipoSubmit: {},
});
export default CrearEquipo;
