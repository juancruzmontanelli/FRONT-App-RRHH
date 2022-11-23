import React from "react";
import { ScrollView } from "react-native";
import ItemDeLista from "../componentes/ItemDeLista";
import { categoriasNovedad } from "../Utils/utils";


function NovedadScreen({ navigation, novedad }) {
  const valoresNovedad = Object.keys(novedad).map((key) => novedad[key]);
  
  return (
    <ScrollView style={{ backgroundColor: "#0072b7" }}>
      {categoriasNovedad.map((categoria, indice) => (
        <ItemDeLista
          title={categoria}
          secondaryText={
            valoresNovedad[indice] ? valoresNovedad[indice] : "Inexistente"
          }
        />
      ))}
    </ScrollView>
  );
}

export default NovedadScreen;
