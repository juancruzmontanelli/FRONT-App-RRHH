import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { Box, TextInput, Button } from "@react-native-material/core";
import { useDispatch } from "react-redux";
import { crearOficina } from "../estados/oficinas";
import { SelectList } from "react-native-dropdown-select-list";
import {paises, ciudades} from "../Utils/dataOficinas";

function CrearOficina() {
  const dispatch = useDispatch();
  const [pais, setPais] = useState(0)
  const [ciudad, setCiudad] = useState(0)
  const [direccion, setDireccion] = useState("")

  const oficina = () => {
    let arrayPais = paises.filter((obj)=> obj.key === pais)
    let arrayCiudad = ciudades.filter((obj)=> obj.key === ciudad)
    return {
      pais: arrayPais[0].value,
      ciudad: arrayCiudad[0].value,
      direccion: direccion
    }
  };

  const SubmitHandler = () => {
    dispatch(crearOficina(oficina()));
  };
  
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <Box style={style.box}>
          <Text style={style.title}>CREAR OFICINA</Text>
          <View style={style.contenedor}>
            <Text style={style.text}>PAIS</Text>
            <SelectList
              style={{marginBottom: 20}}
              data={paises}
              setSelected={(e) => {setPais(e)}}
            />
            <Text style={style.text}>CIUDAD</Text>
            <SelectList
              style={{marginBottom: 20}}
              data={ciudades.filter((obj)=> obj.key === pais)}
              setSelected={(e) => setCiudad(e)}
            />
            <Text style={style.text}>DIRECCION</Text>
            <TextInput
              onChangeText={(e) => setDireccion(e)}
              placeholder="Direccion"
              style={style.input}
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  box: {
    marginTop: "10%",
    alignItems: "center",
  },
  contenedor: {
    marginBottom: 25,
    width: 300,
  },
  text: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 15,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#0072b7",
    width: 130,
  },
});

export default CrearOficina;
