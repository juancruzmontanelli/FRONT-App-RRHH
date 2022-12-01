import { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Box, Button } from "@react-native-material/core";
import {
  Table,
  Row,
  TableWrapper,
  Rows,
  Cell,
} from "react-native-table-component";
import { SelectList } from "react-native-dropdown-select-list";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../componentes/Loader";
import {
  traerTodasNovedades,
  traerUnaNovedad,
  actualizarNovedad,
} from "../estados/novedades";

const Detalles = ({ visible, children }) => {
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

const SuperUserSolicitudes = () => {
  const dispatch = useDispatch();
  const usuario = useSelector((estado) => estado.usuarios.infoDeUsuario);
  const novedades = useSelector((state) => state.novedades.novedades);
  const novedad = useSelector((estado) => estado.novedades.novedad);
  const estado = useSelector((estado) => estado.novedades.editado)

  useEffect(() => {
    dispatch(traerTodasNovedades(usuario));
  }, [estado]);

  // STATES
  const [visible, setVisible] = useState(false);
  // const [estado, setEstado] = useState("Pendiente");
  // TABLA
  const headers = ["Nombre", "Equipo", "Estado", "Detalle"];
  const rows = novedades ? (
    novedades.map((novedad) => [
      novedad.usuario.perfil.nombre,
      novedad.usuario.equipo.nombre,
      novedad.estado,
      novedad.id,
    ])
  ) : (
    <></>
  );

  // DETALLES
  const rowsDetalles = [
    ["fecha de inicio:", novedad.fechaDeInicio],
    ["fecha de fin:", novedad.fechaDeFin],
    ["cantidad de dias:", novedad.cantidadDias],
    ["cantidad de horas:", novedad.cantidadHoras],
    ["observaciones:", novedad.observacion],
    ["autorizado por:", "XXXXXXX"],
  ];

  const data = [
    { key: "1", value: "pendiente " },
    { key: "2", value: "aprobado " },
    { key: "4", value: "rechazado" },
  ];

  const element = (data, index) => (
    <Button
      key={data}
      title="DETALLES"
      style={styles.btn}
      titleStyle={styles.btnText}
      onPress={() => {
        setVisible(true);
        dispatch(traerUnaNovedad(data));
      }}
    />
  );

  // EDIT ESTADO
  const editarEstado = (estado) => {
    const update = { estado:{ estado: estado}, 
                    novedadId: novedad.id,
                    usuario: usuario};
   
    dispatch(actualizarNovedad(update));
  };

  return novedades ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <Box style={{ marginTop: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20 }}>HISTORIAL NOVEDADES </Text>
          <Box></Box>
        </View>

        <View>
          <Table borderStyle={{ borderColor: "transparent" }}>
            <Row data={headers} style={styles.head} textStyle={styles.title} />
            {rows.map((rowData, index) => (
              <>
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={
                        cellIndex === 3 ? element(cellData, index) : cellData
                      }
                      textStyle={styles.text}
                    />
                  ))}
                </TableWrapper>
              </>
            ))}
          </Table>
        </View>
        <Detalles visible={visible}>
          <View style={{ alignItems: "center" }}>
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                  source={require("../assets/cancel.png")}
                  style={styles.cancel}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalHeader}>
              <Text>{novedad.tipoDeNovedad}</Text>
              <View style={styles.container2}>
                <Table>
                  <Rows data={rowsDetalles} textStyle={{ margin: 10 }} />
                </Table>
              </View>
              <Text>ESTADO:</Text>
              <Text>{novedad.estado}</Text>
              {novedad.estado === "pendiente" ? (
                <Box style={{ flexDirection: "row" }}>
                  <Button
                    title="Rechazar"
                    tintColor="#000000"
                    titleStyle={{ fontSize: 20 }}
                    style={{
                      backgroundColor: "#DC0101",
                      marginTop: 10,
                      marginRight: 10,
                      width: 150,
                    }}
                    onPress={() => {
                      editarEstado("rechazado")
                      //setEstado('rechazado')
                    setVisible(false)
                  }}
                  />
                  <Button
                    title="Aprobar"
                    tintColor="#000000"
                    titleStyle={{ fontSize: 20 }}
                    style={{
                      backgroundColor: "#5FBA00",
                      marginTop: 10,
                      width: 150,
                    }}
                    onPress={() => {
                      editarEstado("aprobado")
                    setVisible(false)
                  }}
                  />
                </Box>
              ) : (
                <Button
                  title="Pendiente"
                  tintColor="#000000"
                  titleStyle={{ fontSize: 20 }}
                  style={{
                    backgroundColor: "#0072b7",
                    marginTop: 10,
                    width: 150,
                  }}
                  onPress={() => {
                    editarEstado("pendiente")
                  setVisible(false)
                }}
                />
              )}

              {/* <SelectList
                data={data}
                setSelected={setEstado}
                save={"value"}
                placeholder={estado}
                boxStyles={{ width: 150 }}
                onSelect={() => {
                    const update = { estado: estado}
                   // console.log(novedad.id, update, usuario)
                 dispatch(actualizarNovedad(novedad.id, update, usuario))
                }}
                
              /> */}
            </View>
          </View>
        </Detalles>
      </Box>
    </SafeAreaView>
  ) : (
    <Loader />
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: { height: 40 },
  title: { color: "#0072B7", textAlign: "center" },
  text: { margin: 6, textAlign: "center" },
  row: { flexDirection: "row" },
  btn: { width: 100, height: 25, borderRadius: 2, backgroundColor: "#f89c1c" },
  btnText: {
    textAlign: "center",
    color: "#000000",
    fontSize: 10,
    marginBottom: 10,
  },
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
  modalHeader: {
    alignItems: "center",
  },
  container2: { width: 350, margin: 20, marginLeft: 100 },
  cancel: { height: 20, width: 20 },
});

export default SuperUserSolicitudes;
