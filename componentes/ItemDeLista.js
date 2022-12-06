import React from "react";
import { ListItem } from "@react-native-material/core";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { traerEquipo, traerMiembroEquipo } from "../estados/equipos";

function ItemDeLista({
  title,
  secondaryText,
  estado,
  navigation,
  asistencia,
  id,
  equipo,
}) {
  const dispatch = useDispatch();
  return (
    <ListItem
      onPress={() => {
        if (!asistencia && !equipo) {
          dispatch(traerMiembroEquipo(id));
          navigation.navigate("Miembro");
        } else if(equipo){
          dispatch(traerEquipo(id))
          navigation.navigate("Mi Equipo")
        }

      }}
      leadingMode="icon"
      title={title}
      secondaryText={secondaryText}

      leading={
        <FontAwesome5
          size={20}
          color={estado ? "green" : asistencia || equipo ? "#f89c1c" : "red"}
          name={
            estado
              ? "user-alt"
              : asistencia
              ? "chevron-circle-right"
              : equipo
              ? "user-friends"
              : "user-slash"
          }
        />
      }
      trailing={
        asistencia ? (
          ""
        ) : (
          <FontAwesome5
            size={24}
            color={"#f89c1c"}
            name="chevron-circle-right"
          />
        )
      }
    />
  );
}

export default ItemDeLista;
