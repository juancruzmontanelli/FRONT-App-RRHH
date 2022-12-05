import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { retornarFechaActual, restablecerFechaActual } from "../Utils/utils";
import {
  Image,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Modal,
  ScrollView,
  Text,
} from "react-native";
import { Avatar } from "@react-native-material/core";
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
      marginVertical: "7%",
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
    <ScrollView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <Box
        style={{
          alignItems: "center",
        }}
      >
        {usuario.tipo ? <View style={{marginTop:'15%', marginBottom:'10%', borderBottomWidth: 2, borderColor:"#f89c1c"}}><Text style={{fontSize:25, color:"#0072b7", fontWeight:'800'}}>Usuario RRHH {usuario.nombre}</Text></View> : <View style={fichajeStyles.fichajeContainer}>
          <View>
            <Button
              title={fichaje.horaDeIngreso ? "Fichar Salida" : "Fichar Ingreso"}
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
              onPressIn={fichaje.horaDeIngreso ? salidaHandler : ingresoHandler}
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
        </View> }
        
        <View>
          <Button
            title="Mi Perfil"
            tintColor="#f89c1c"
            titleStyle={{ fontSize: 20 }}
            style={{ backgroundColor: "#0072b7", width: 300 }}
            trailing={(props) => (
              <Avatar
                icon={(props) => <Icon name="account" {...props} />}
                size={26}
                color={"#f89c1c"}
              />
            )}
            onPress={() => {
              if (usuario.tipo) {
                setVisible(true);
                setModo("usuario");
              } else {
                navigation.navigate("Usuario");
              }
            }}
          />
        </View>
        <View>
          <Button
            title="Oficinas"
            tintColor="#f89c1c"
            titleStyle={{ fontSize: 20 }}
            style={{ backgroundColor: "#0072b7", marginTop: 50, width: 300 }}
            trailing={(props) => (
              <Avatar
                icon={(props) => <Icon name="account" {...props} />}
                size={26}
                color={"#f89c1c"}
              />
            )}
            onPress={() => {
              if (usuario.tipo) {
                setVisible(true);
                setModo("Oficinas");
              } else {
                navigation.navigate("Oficinas");
              }
            }}
          />
        </View>

        <View style={{ flexDirection: "row", paddingHorizontal: 4 / -2 }}>
          <Button
            title="Novedades"
            tintColor="#f89c1c"
            titleStyle={{ fontSize: 20 }}
            style={{
              backgroundColor: "#0072b7",
              marginTop: 50,
              width: 300,
            }}
            trailing={(props) => <Icon name="send" {...props} />}
            onPress={() => {
              setVisible(true);
              setModo("novedad");
            }}
          />
        </View>

       
        <View>
          <Button
            title={usuarioTipo ? "Equipos" : "Mi Equipo"}
            tintColor="#f89c1c"
            titleStyle={{ fontSize: 20 }}
            style={{ backgroundColor: "#0072b7", marginTop: 50, width: 300 }}
            trailing={(props) => (
              <Avatar
                icon={(props) => <Icon name="account-group" {...props} />}
                size={26}
                color={"#f89c1c"}
              />
            )}
            onPress={() => {
              if (usuarioTipo) {
                setVisible(true);
                setModo("equipo");
              } else {
                navigation.navigate("Mi Equipo");
              }
            }}
          />
        </View>

        <View>
          <Button
            title="Mi Asistencia"
            tintColor="#f89c1c"
            titleStyle={{ fontSize: 20 }}
            style={{ backgroundColor: "#0072b7", marginTop: 50, width: 300 }}
            trailing={(props) => <Icon name="history" {...props} />}
            onPress={() => {
              if (usuario.tipo) {
                setVisible(true);
                setModo("asistencia");
              } else {
                navigation.navigate("HistorialAsistencias");
              }
            }}
          />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
