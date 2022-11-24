import React, { useEffect } from "react";
import { Pressable, ScrollView } from "react-native";
import { Button } from "@react-native-material/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dummyNovedades } from "../Utils/utils";
import ItemDeLista from "../componentes/ItemDeLista";
import { traerNovedadesUsuario } from "../estados/novedades";

function HistorialNovedades({ navigation }) {
  const dispatch = useDispatch();
  const usuario = useSelector((estado) => estado.usuarios.infoDeUsuario);
  const novedades = useSelector((estado) => estado.novedades.novedades.novedades);

  useEffect(() => {
    dispatch(traerNovedadesUsuario(usuario.id));
  }, []);
  return (
    <ScrollView style={{ backgroundColor: "#0072b7" }}>
      {novedades.map((novedad, indice) => (
        <ItemDeLista
          key={
            Math.random(indice * 11) +
            Math.random(indice * 22) +
            Math.random(indice * 33)
          }
          title={novedad.tipoNovedad}
          secondaryText={novedad.estado}
          id={novedad.id}
          novedad={true}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
}

export default HistorialNovedades;
