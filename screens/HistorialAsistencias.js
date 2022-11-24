import React from "react";
import { View } from "react-native";
import ItemDeLista from "../componentes/ItemDeLista";
import { retornarFechaActual } from "../Utils/utils";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { traerAsistencias } from "../estados/asistencias";
import { useState } from "react";

function HistorialAsistencias() {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState({});
  const asistencias = useSelector((estado) => estado.asistencias);
  const estadoUsuario = useSelector((estado) => estado.usuarios);
  const cargando = !estadoUsuario.cargando
    ? estadoUsuario.cargando
    : estadoUsuario._z.cargando;
  console.log(asistencias)

  useEffect(() => {
    if (estadoUsuario._z) {
      setUsuario(estadoUsuario._z.infoDeUsuario);
      const usuarioId = estadoUsuario._z.infoDeUsuario.id;
      dispatch(traerAsistencias(usuarioId));
    } else
      estadoUsuario.infoDeUsuario.then((usuario) => {
        setUsuario(usuario);
        const usuarioId = usuario.id;
        traerAsistencias(usuarioId);
      });
  }, [asistencias.cargando]);
  return (
    <View>
      {asistencias.asistencias.map((el) => (
        <ItemDeLista
          title={`${el.fecha}`}
          secondaryText={`Hora de Ingreso: ${el.horaDeIngreso}\nHora de salida: ${el.horaDeSalida}`}
        />
      ))}
    </View>
  );
}

export default HistorialAsistencias;
