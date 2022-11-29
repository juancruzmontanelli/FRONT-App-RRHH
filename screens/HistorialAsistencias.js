import React from "react";
import { ScrollView } from "react-native";
import ItemDeLista from "../componentes/ItemDeLista";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { traerAsistencias } from "../estados/asistencias";
import Loader from "../componentes/Loader";

function HistorialAsistencias() {
  const dispatch = useDispatch();
  const asistencias = useSelector((estado) => estado.asistencias.asistencias);
  const usuario = useSelector((estado) => estado.usuarios.infoDeUsuario);

  useEffect(() => {
    dispatch(traerAsistencias(usuario.id));
  }, []);
  return asistencias.length ? (
    <ScrollView>
      {asistencias.map((asistencia, indice) => (
        <ItemDeLista
          key={indice}
          title={`${asistencia.fecha}`}
          secondaryText={`Hora de Ingreso: ${asistencia.horaDeIngreso}\nHora de salida: ${asistencia.horaDeSalida}`}
        />
      ))}
    </ScrollView>
  ) : (
    <Loader />
  );
}

export default HistorialAsistencias;
