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
import { traerNovedadesUsuario, traerUnaNovedad } from "../estados/novedades";

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

const VerSolicitudes = () => {
  const dispatch = useDispatch();
  const usuarioId = useSelector((estado) => estado.usuarios.infoDeUsuario.id);
  const {novedadesUsuario} = useSelector((state) => state.novedades);
  const novedad = useSelector((estado) => estado.novedades.novedad)
  
  useEffect(() => {
    dispatch(traerNovedadesUsuario(usuarioId));
  }, []);

  // STATES
  const [visible, setVisible] = useState(false);
  //const [estado, setEstado] = useState("Pendiente");
  // TABLA
  const headers = ["Tipo Novedad", "Estado", "detalle"];
  const rows = novedadesUsuario ? (
    novedadesUsuario.map((novedad) => [
      novedad.tipoDeNovedad,
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
    ["Autorizado por:", novedad.autorizadoPor ? novedad.autorizadoPor : 'XXXX'],
  ];


  const element = (data, index) => (
    <Button
      key={data}
      title="DETALLES"
      style={styles.btn}
      titleStyle={styles.btnText}
      onPress={() => {
        setVisible(true);
        dispatch(traerUnaNovedad(data))
      }}
    />
  
  );

  return novedadesUsuario ? (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <Box style={{ marginTop: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>HISTORIAL NOVEDADES </Text>
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
                        cellIndex === 2 ? element(cellData, index) : cellData
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
              <Text  style={{ fontSize: 25, fontWeight: "bold" }} >{novedad.tipoDeNovedad}</Text>
              <View style={styles.container2}>
                <Table>
                  <Rows data={rowsDetalles} textStyle={{ margin: 10, fontWeight: "bold" }} />
                </Table>
              </View>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>ESTADO:</Text>
              <Text style={{ fontWeight: "bold", fontSize: 25, color: "#0072B7" }} >{novedad.estado}</Text>
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
  title: { color: "#0072B7", textAlign: "center", fontWeight: 'bold', fontSize: 15},
  text: { margin: 6, textAlign: "center", fontWeight: 'bold' },
  row: { flexDirection: "row" },
  btn: { width: 125, height: 25, borderRadius: 2, backgroundColor: "#f89c1c", margin: 5},
  btnText: {
    textAlign: "center",
    color: "#000000",
    fontSize: 12,
    marginBottom: 10,
    fontWeight: "bold",
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

export default VerSolicitudes;
