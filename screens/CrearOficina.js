import { Box } from "@react-native-material/core";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { crearOficina } from "../estados/oficinas";

function CrearOficina() {
  const dispatch = useDispatch();
  const [oficina, setOficina] = useState({
    pais: "",
    ciudad: "",
    direccion: ""
  });
  
  const SubmitHandler = () => {
    dispatch(crearOficina(oficina))
  };

  return (
    <View>
      <Box style={style.box}>
        <Text style={style.title}>CREAR OFICINA</Text>
        <View style={style.contenedor}>
          <TextInput
            placeholder="PAIS"
            onChangeText={(e) => setOficina({ ...oficina, pais: e })}
            style={{ flex: 1, paddingVertical: 0 }}
          ></TextInput>
        </View>
        <View style={style.contenedor}>
          <TextInput
            placeholder="CIUDAD"
            onChangeText={(e) => setOficina({ ...oficina, ciudad: e })}
            style={{ flex: 1, paddingVertical: 0 }}
          ></TextInput>
        </View>
        <View style={style.contenedor}>
          <TextInput
            placeholder="DIRECCION"
            onChangeText={(e) => setOficina({ ...oficina, direccion: e })}
            style={{ flex: 1, paddingVertical: 0 }}
          ></TextInput>
        </View>
        <View>
          <Button
            title="ENVIAR"
            style={style.button}
            onPress={SubmitHandler}
          ></Button>
        </View>
      </Box>
    </View>
  );
}

const style = StyleSheet.create({
  box: {
    marginTop: "15%",
    alignItems: "center",
  },
  contenedor: {
    flexDirection: "row",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 25,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0072b7",
    marginTop: 30,
    width: 130,
  },
});

export default CrearOficina;
