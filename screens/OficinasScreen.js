import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { traerOficinas } from "../estados/oficinas";

function Oficinas() {
  const dispatch = useDispatch();
  const oficinas = useSelector((estado) => estado.oficinas.oficinas);

  useEffect(() => {
    dispatch(traerOficinas());
  }, []);

  return (
    <FlatList
      data={oficinas}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: oficina }) => (
        <View key={oficina.id} style={styles.container}>
          <Text style={styles.title}>Oficina</Text>
          <Text>Pais: {oficina.pais}</Text>
          <Text>Ciudad: {oficina.ciudad}</Text>
          <Text>Direccion: {oficina.direccion}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontWeight: "bold",
  },
});

export default Oficinas;
