import React from "react";
import { View } from "react-native";
import ItemDeLista from "../componentes/ItemDeLista";
import { retornarFechaActual } from "../Utils/utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function HistorialAsistencias() {
  return (
    <View>
      <ItemDeLista
        title={`${retornarFechaActual().fecha}`}
        secondaryText={`Hora de Ingreso: ${
          retornarFechaActual().hora
        }\nHora de salida: ${retornarFechaActual().hora}`}
      />
    </View>
  );
}

export default HistorialAsistencias;
