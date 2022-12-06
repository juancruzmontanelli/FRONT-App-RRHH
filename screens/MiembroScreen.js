import React, { useEffect } from "react";
import Perfil from "../componentes/Perfil";
import Loader from "../componentes/Loader";
import { keysMiembro } from "../Utils/utils";
import { useSelector } from "react-redux";

function MiembroScreen({ navigation }) {
  const miembro = useSelector((estado) => estado.equipos.miembro);
  return miembro.perfil ? (
    <Perfil
      object={miembro.perfilBasico}
      name={`${miembro.perfilBasico.Nombre}`}
    />
  ) : (
    <Loader />
  );
}

export default MiembroScreen;
