import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { Button } from "@react-native-material/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dummyNovedades } from "../Utils/utils";
import { AntDesign } from "@expo/vector-icons";

function HistorialNovedades({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#0072b7" }}>
      {dummyNovedades.map((novedad, indice) => (
        <Button
          title={`#${indice + 1} ${novedad.tipoNovedad}`}
          variant="contained"
          color="#f89c1c"
          onPress={() => {
            navigation.navigate("Novedad");
          }}
          leading={(props) => (
            <AntDesign
              size={24}
              name="rightcircle"
              color="#0072b7"
              {...props}
            />
          )}
        />
      ))}
    </ScrollView>
  );
}

export default HistorialNovedades;
