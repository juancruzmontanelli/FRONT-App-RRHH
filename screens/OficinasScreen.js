import { ListItem } from "@react-native-material/core";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { traerOficinas } from "../estados/oficinas";
import { Divider } from "react-native-flex-layout";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Oficinas() {
  const dispatch = useDispatch();
  const oficinas = useSelector((estado) => estado.oficinas.oficinas);

  useEffect(() => {
    dispatch(traerOficinas());
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={oficinas}
      ItemSeparatorComponent={() => (
        <Divider style={{ backgroundColor: "#f89c1c", padding: 1 }} />
      )}
      renderItem={({ item: oficina }) => (
        <View key={oficina.id}>
          <ListItem
            leading={
              <MaterialCommunityIcons
                name="office-building"
                color="#f89c1c"
                size={25}
              />
            }
            title={`${oficina.pais}`}
            meta={oficina.direccion}
            secondaryText={`${oficina.ciudad}`}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "rgba(0, 114, 183, 0.6)" },
  title: {
    fontWeight: "bold",
  },
});

export default Oficinas;
