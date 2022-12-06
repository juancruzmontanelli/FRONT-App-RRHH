import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import ItemDeLista from "../componentes/ItemDeLista";
import { useDispatch, useSelector } from "react-redux";
import { traerEquipo } from "../estados/equipos";
import Loader from "../componentes/Loader";

function MiembrosLista({ navigation }) {
  const dispatch = useDispatch();
  const { infoDeUsuario } = useSelector((estado) => estado.usuarios);
  const equipo = useSelector((estado) => estado.equipos.miembros);
  useEffect(() => {
    if (!infoDeUsuario.tipo) {
      dispatch(traerEquipo(infoDeUsuario.idEquipo));
    }
  }, []);

  return equipo.length ? (
    <ScrollView style={{ backgroundColor: "rgba(0, 114, 183, 0.6)" }}>
      {equipo.map((miembro, indice) => (
        <ItemDeLista
          key={Math.random(indice * 33)}
          title={`${miembro.nombre} ${miembro.apellido}`}
          secondaryText={miembro.puesto}
          estado={miembro.activo}
          id={miembro.id}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  ) : (
    <Loader />
  );
}

export default MiembrosLista;
