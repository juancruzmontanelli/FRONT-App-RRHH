import React from "react";
import { ListItem } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { traerUnaNovedad } from "../estados/novedades";

function ItemDeLista({ title, secondaryText, novedad, navigation, id }) {
  const dispatch = useDispatch();
  return (
    <ListItem
      onPress={() => {
        if (novedad) {
          navigation.navigate("Novedad");
          dispatch(traerUnaNovedad(id));
        }
      }}
      leadingMode="icon"
      style={{ backgroundColor: "green" }}
      title={title}
      secondaryText={secondaryText}
      leading={<AntDesign size={24} color="#f89c1c" name="rightcircle" />}
    />
  );
}

export default ItemDeLista;
