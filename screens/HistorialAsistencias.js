import React from "react";
import { ScrollView } from "react-native";
import ItemDeLista from "../componentes/ItemDeLista";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { traerAsistencias } from "../estados/asistencias";

function HistorialAsistencias() {
  const dispatch = useDispatch();
  const asistencias = useSelector((estado) => estado.asistencias);
  const usuario = useSelector((estado) => estado.usuarios.infoDeUsuario);

  useEffect(() => {
    dispatch(traerAsistencias(usuario.id));
  }, []);
  return (
    <ScrollView>
      {asistencias.asistencias.map((el) => (
        <ItemDeLista
          title={`${el.fecha}`}
          secondaryText={`Hora de Ingreso: ${el.horaDeIngreso}\nHora de salida: ${el.horaDeSalida}`}
        />
      ))}
    </ScrollView>
  );
}

export default HistorialAsistencias;
