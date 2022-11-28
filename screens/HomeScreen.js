import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { retornarFechaActual, restablecerFechaActual } from "../Utils/utils";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  Modal,
  Text,
} from "react-native";
import { Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Box, Button } from "@react-native-material/core";
import { crearAsistencia } from "../estados/asistencias";
import { useDispatch, useSelector } from "react-redux";
import {
  ficharIngreso,
  resetearIngreso,
  setearUltimoFichaje,
} from "../estados/usuarios";

const NovedadesMenu = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);

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
  const dispatch = useDispatch();
  const usuarioId = useSelector((estado) => estado.usuarios.infoDeUsuario.id);
  const { ingresoDeUsuario } = useSelector((estado) => estado.usuarios);
  const { ultimoFichaje } = useSelector((estado) => estado.usuarios);

  // STATES SUBMENU
  const [visible, setVisible] = useState(false);
  const [fichaje, setFichaje] = useState(
    ingresoDeUsuario.fecha
      ? { ...ingresoDeUsuario, horaDeSalida: "" }
      : {
          fecha: "",
          horaDeIngreso: "",
          horaDeSalida: "",
        }
  );

  const ingresoHandler = () => {
    dispatch(
      ficharIngreso({
        horaDeIngreso: retornarFechaActual().hora,
        fecha: retornarFechaActual().fecha,
      })
    );
    setFichaje({
      ...fichaje,
      horaDeIngreso: retornarFechaActual().hora,
      fecha: retornarFechaActual().fecha,
    });
    Alert.alert("Ingreso", `Hora de ingreso: ${retornarFechaActual().hora}`);
  };

  const salidaHandler = () => {
    setFichaje({
      ...fichaje,
      horaDeSalida: retornarFechaActual().hora,
    });

    Alert.alert("Salida", `Hora de salida: ${retornarFechaActual().hora}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <Box
        style={{
          marginTop: "7%",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 150, height: 150 }}
          source={require("../assets/globlal.png")}
        />
        <View>
          <View>
            <Text>Fecha: {ultimoFichaje.fecha}</Text>
            <Text>Ultimo Ingreso: {ultimoFichaje.horaDeIngreso}</Text>
            <Text>Ultima Salida: {ultimoFichaje.horaDeSalida}</Text>
          </View>
          <Button
            title="Mi Perfil"
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
              navigation.navigate("Usuario");
            }}
          />
        </View>
        {/*  <View>
          <Button
            title="Empleados"
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
          />
        </View> */}
        <View style={{ flexDirection: "row", paddingHorizontal: 4 / -2 }}>
          <Button
            title="Novedades"
            tintColor="#f89c1c"
            titleStyle={{ fontSize: 13 }}
            style={{
              backgroundColor: "#0072b7",
              marginTop: 50,
              width: 300,
            }}
            trailing={(props) => <Icon name="send" {...props} />}
            onPress={() => {
              setVisible(true);
            }}
          />
        </View>
        <View>
          {fichaje.horaDeIngreso ? (
            <Button
              title="Fichar Salida"
              tintColor="#f89c1c"
              titleStyle={{ fontSize: 20 }}
              style={{
                backgroundColor: "#0072b7",
                marginTop: 50,
                width: "75%",
              }}
              trailing={(props) => <MaterialIcons name="work-off" {...props} />}
              onPressIn={salidaHandler}
              onPressOut={async () => {
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
              }}
            />
          ) : (
            <Button
              title="Fichar Ingreso"
              tintColor="#f89c1c"
              titleStyle={{ fontSize: 20 }}
              style={{
                backgroundColor: "#0072b7",
                marginTop: 50,
                width: 300,
              }}
              trailing={(props) => <MaterialIcons name="work" {...props} />}
              onPress={ingresoHandler}
            />
          )}
        </View>
        {/*  <View>
          <Button
            title="Mi Equipo"
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
          />
        </View> */}

        <View>
          <Button
            title="Mi Asistencia"
            tintColor="#f89c1c"
            titleStyle={{ fontSize: 20 }}
            style={{ backgroundColor: "#0072b7", marginTop: 50, width: 300 }}
            trailing={(props) => <Icon name="history" {...props} />}
            onPress={() => {
              navigation.navigate("HistorialAsistencias");
            }}
          />
        </View>

        <NovedadesMenu visible={visible}>
          <View style={{ alignItems: "center" }}>
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                  source={require("../assets/cancel.png")}
                  style={styles.cancel}
                />
              </TouchableOpacity>
            </View>
            <Button
              title="Nueva novedad"
              tintColor="#f89c1c"
              titleStyle={{ fontSize: 13 }}
              style={{
                backgroundColor: "#0072b7",
                marginTop: 50,
                width: "48%",
                marginHorizontal: 4 / 2,
              }}
              trailing={(props) => <Icon name="send" {...props} />}
              onPress={() => {
                setVisible(false);
                navigation.navigate("Novedades");
              }}
            />
            <Button
              title="Ver Solicitudes"
              tintColor="#f89c1c"
              titleStyle={{ fontSize: 13 }}
              style={{
                backgroundColor: "#0072b7",
                marginTop: 50,
                width: "48%",
                marginHorizontal: 4 / 2,
              }}
              trailing={(props) => <Icon name="send" {...props} />}
              onPress={() => {
                setVisible(false);
                navigation.navigate("VerSolicitudes");
              }}
            />
            {/*   <Button
              title="Mis novedades"
              tintColor="#f89c1c"
              titleStyle={{ fontSize: 13 }}
              style={{
                backgroundColor: "#0072b7",
                marginTop: 50,
                width: "48%",
                marginHorizontal: 4 / 2,
              }}
              trailing={(props) => <Icon name="history" {...props} />}
              onPress={() => {
                setVisible(false);
                navigation.navigate("HistorialNovedades");
              }}
            /> */}
          </View>
        </NovedadesMenu>
      </Box>
    </SafeAreaView>
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
