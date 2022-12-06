import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { retornarFechaActual, restablecerFechaActual } from "../Utils/utils";
import {
  Image,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Modal,
  Text,
  Pressable,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, Button } from "@react-native-material/core";
import { crearAsistencia } from "../estados/asistencias";
import SubMenuComponent from "../componentes/SubMenuComponent ";
import { useDispatch, useSelector } from "react-redux";
import {
  ficharIngreso,
  resetearIngreso,
  setearUltimoFichaje,
  modificarEstadoUsuario,
  cerrarSesion,
} from "../estados/usuarios";

const SubMenu = ({ visible, children, modo }) => {
  const [showModal, setShowModal] = useState(visible);
  //const [modo, setModo] = useState(modo)
  useEffect(() => {
    toggleModal();
  }, [visible]);

  // TOGGLE MODAL
  const toggleModal = () => {
    visible ? setShowModal(true) : setShowModal(false);
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const Home = ({ navigation }) => {
  useEffect(() => {
    //ESTO PREVIENE QUE SE PUEDA VOLVER A LA PANTALLA DE LOGIN CON EL BOTÓN DE RETROCESO EN EL CELULAR
    navigation.addListener("beforeRemove", function (e) {
      e.preventDefault();
    });
  }, [navigation]);
  // USER STATES
  const dispatch = useDispatch();
  const usuarioTipo = useSelector(
    (estado) => estado.usuarios.infoDeUsuario.tipo
  );
  const usuarioId = useSelector((estado) => estado.usuarios.infoDeUsuario.id);
  const usuario = useSelector((estado) => estado.usuarios.infoDeUsuario);
  const { ingresoDeUsuario } = useSelector((estado) => estado.usuarios);
  const { ultimoFichaje } = useSelector((estado) => estado.usuarios);

  // STATES SUBMENU
  const [visible, setVisible] = useState(false);
  const [modo, setModo] = useState("");

  const [fichaje, setFichaje] = useState(
    ingresoDeUsuario.fecha
      ? { ...ingresoDeUsuario, horaDeSalida: "" }
      : {
          fecha: "",
          horaDeIngreso: "",
          horaDeSalida: "",
        }
  );

  //ESTILOS DEL MARCO DE FICHAJE
  const fichajeStyles = StyleSheet.create({
    fichajeContainer: {
      marginVertical: "3%",
      marginHorizontal: "5%",
      borderLeftWidth: 1,
      borderBottomWidth: 1,
      borderRightWidth: 1,
      borderRadius: 5,
    },
    botonFichaje: {
      backgroundColor: fichaje.horaDeIngreso
        ? "rgba(227, 102, 102, 0.67)"
        : "rgba(102, 227, 119, 0.67)",
      borderColor: "black",
      borderStyle: "solid",
      borderWidth: 1,
    },
    fechaFichajeContainer: {
      width: "40%",
      paddingVertical: "10%",
      alignItems: "center",
      borderRightWidth: 1,
    },
    horarioFichajeContainer: {
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: "3%",
    },
  });

  //FUNCIONALIDAD DEL FICHAJE
  const ingresoHandler = () => {
    dispatch(
      ficharIngreso({
        horaDeIngreso: retornarFechaActual().hora,
        fecha: retornarFechaActual().fecha,
        idUsuario: usuarioId,
      })
    )
      .then(() => {
        dispatch(
          modificarEstadoUsuario({ usuarioId: usuarioId, activo: true })
        );
        setFichaje({
          ...fichaje,
          horaDeIngreso: retornarFechaActual().hora,
          fecha: retornarFechaActual().fecha,
        });
        Alert.alert(
          "Ingreso",
          `Hora de ingreso: ${retornarFechaActual().hora}`
        );
      })
      .catch((error) => {
        Alert.alert("Asistencia", error);
      });
  };

  const salidaHandler = () => {
    setFichaje({
      ...fichaje,
      horaDeSalida: retornarFechaActual().hora,
    });
    dispatch(modificarEstadoUsuario({ usuarioId: usuarioId, activo: false }));
    Alert.alert("Salida", `Hora de salida: ${retornarFechaActual().hora}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ffff" }}>
      <Box
        style={{
          alignItems: "center",
        }}
      >
        {usuario.tipo ? (
          <View
            style={{
              marginTop: "15%",
              marginBottom: "10%",
              borderBottomWidth: 2,
              borderColor: "#f89c1c",
            }}
          >
            <Text style={{ fontSize: 25, color: "#0072b7", fontWeight: "800" }}>
              Usuario RRHH {usuario.nombre}
            </Text>
          </View>
        ) : (
          <View style={fichajeStyles.fichajeContainer}>
            <View>
              <Button
                title={
                  fichaje.horaDeIngreso ? "Fichar Salida" : "Fichar Ingreso"
                }
                tintColor="black"
                titleStyle={{ fontSize: 20, fontWeight: "300" }}
                style={fichajeStyles.botonFichaje}
                trailing={(props) => (
                  <MaterialIcons
                    name="touch-app"
                    style={{ fontSize: 25 }}
                    {...props}
                  />
                )}
                onPressIn={
                  fichaje.horaDeIngreso ? salidaHandler : ingresoHandler
                }
                onPressOut={() => {
                  if (fichaje.horaDeIngreso && fichaje.horaDeSalida) {
                    dispatch(
                      crearAsistencia({
                        usuarioId: usuarioId,
                        datosAsistencia: fichaje,
                      })
                    )
                      .then(() => {
                        dispatch(setearUltimoFichaje(fichaje));
                      })
                      .catch(() => {
                        Alert.alert(
                          "Asistencia",
                          "La cantidad máxima de fichajes diarios es de 2(dos) ingresos y 2(dos) salidas"
                        );
                      });
                    dispatch(resetearIngreso());
                    setFichaje(restablecerFechaActual);
                  }
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={fichajeStyles.fechaFichajeContainer}>
                <Icon
                  name="calendar"
                  style={{ fontSize: 80, color: "#0072b7" }}
                />
                <Text style={{ fontWeight: "600" }}>
                  {fichaje.fecha ? fichaje.fecha : ultimoFichaje.fecha}
                </Text>
              </View>
              <View style={fichajeStyles.horarioFichajeContainer}>
                <Icon
                  name="clock-outline"
                  style={{ fontSize: 80, color: "#0072b7" }}
                />
                <Text style={{ fontWeight: "600" }}>
                  Último ingreso:{" "}
                  <Text>
                    {fichaje.horaDeIngreso
                      ? fichaje.horaDeIngreso
                      : ultimoFichaje.horaDeIngreso}
                  </Text>
                </Text>
                <Text style={{ fontWeight: "600" }}>
                  Última salida: <Text>{ultimoFichaje.horaDeSalida}</Text>
                </Text>
              </View>
            </View>
          </View>
        )}
        <View style={styles.pressableIconsContainer}>
          <Pressable
            style={styles.pressableIconContainer}
            onPress={() => {
              if (usuario.tipo) {
                setVisible(true);
                setModo("usuario");
              } else {
                navigation.navigate("Usuario");
              }
            }}
          >
            <FontAwesome5 style={styles.pressableIcons} name="user-alt" />
            <Text style={styles.pressableIconText}>Perfil</Text>
          </Pressable>
          <Pressable
            style={styles.pressableIconContainer}
            onPress={() => {
              if (usuario.tipo) {
                setVisible(true);
                setModo("Oficinas");
              } else {
                navigation.navigate("Oficinas");
              }
            }}
          >
            <MaterialCommunityIcons
              style={styles.pressableIcons}
              name="office-building"
            />
            <Text style={styles.pressableIconText}>Oficinas</Text>
          </Pressable>
          <Pressable
            style={styles.pressableIconContainer}
            onPress={() => {
              setVisible(true);
              setModo("novedad");
            }}
          >
            <MaterialCommunityIcons
              style={styles.pressableIcons}
              name="form-select"
            />

            <Text style={styles.pressableIconText}>Novedades</Text>
          </Pressable>
          <Pressable
            style={styles.pressableIconContainer}
            onPress={() => {
              if (usuarioTipo) {
                setVisible(true);
                setModo("equipo");
              } else {
                navigation.navigate("Mi Equipo");
              }
            }}
          >
            <FontAwesome5 style={styles.pressableIcons} name="users" />
            <Text style={styles.pressableIconText}>
              {usuarioTipo ? "Equipos" : "Mi Equipo"}
            </Text>
          </Pressable>
          <Pressable
            style={styles.pressableIconContainer}
            onPress={() => {
              if (usuario.tipo) {
                setVisible(true);
                setModo("asistencia");
              } else {
                navigation.navigate("HistorialAsistencias");
              }
            }}
          >
            <FontAwesome5 style={styles.pressableIcons} name="calendar-check" />
            <Text style={styles.pressableIconText}>Asistencia</Text>
          </Pressable>
        </View>

        <SubMenu visible={visible}>
          <View style={{ width: "100%", alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require("../assets/cancel.png")}
                style={styles.cancel}
              />
            </TouchableOpacity>
          </View>
          <SubMenuComponent
            modo={modo}
            setVisible={setVisible}
            navigation={navigation}
          />
        </SubMenu>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableIconsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  pressableIconContainer: {
    paddingVertical: "5%",
    paddingHorizontal: "10%",
    alignItems: "center",
  },
  pressableIcons: { fontSize: 85, color: "#0072b7" },
  pressableIconText: { textAlign: "center", fontSize: 20, fontWeight: "300" },
  logo: {
    width: 150,
    height: 150,
  },
  cancel: { height: 20, width: 20 },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
});

export default Home;
