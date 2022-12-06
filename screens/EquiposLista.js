import React, { useEffect } from "react";
import ItemDeLista from "../componentes/ItemDeLista";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../componentes/Loader";
import { traerTodosLosEquipos } from "../estados/equipos";
import { ScrollView } from "react-native";

function EquiposLista({navigation}) {
  const dispatch = useDispatch();
  const equipos = useSelector((estado) => estado.equipos.equipos);

  useEffect(() => {
    dispatch(traerTodosLosEquipos());
  }, []);

  return equipos.length ? (
    <ScrollView style={{flex:1,backgroundColor:"rgba(0, 114, 183, 0.6)"}}>{equipos.map((equipo, indice) => (
      <ItemDeLista
        key={Math.random(indice * 33)}
        title={equipo.nombre.toUpperCase()}
        equipo={true}
        id={equipo.id}
        navigation={navigation}
      />
    ))}</ScrollView>
    
  ) : (
    <Loader />
  );
}

export default EquiposLista;
