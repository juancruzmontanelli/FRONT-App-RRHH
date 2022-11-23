import React from "react";
import { ListItem } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";

function ItemDeLista({ title, secondaryText }) {
  return (
    <ListItem
      leadingMode="icon"
      style={{ backgroundColor: "green" }}
      title={title}
      secondaryText={secondaryText}
      leading={<AntDesign size={24} color="#f89c1c" name="rightcircle" />}
    />
  );
}

export default ItemDeLista;
