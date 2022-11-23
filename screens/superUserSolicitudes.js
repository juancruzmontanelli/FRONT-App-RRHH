import react, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Box, TextInput, Button, Wrap } from "@react-native-material/core";
import {
  Table,
  Row,
  TableWrapper,
  Rows,
  Cell,
  Col,
} from "react-native-table-component";
import { SelectList } from "react-native-dropdown-select-list";

const Detalles = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    toggleModal();
  }, [visible])

    // TOGGLE MODAL
    const toggleModal = () => {
      visible ? setShowModal(true) : setShowModal(false)
    }
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const VerSolicitudes = () => {
  // STATES
  const [visible, setVisible] = useState(false);
  const [estado, setEstado] = useState('Pendiente')
  // TABLA
  const headers = ["Nombre", "Dependencia", "estado", "detalle"];
  const rows = [
    ["nombre1", "desarollo", "pendiente", ""],
    ["nombre2", "comercial", "pendiente", ""],
    ["nombre3", "audiovisual", "pendiente", ""],
  ];

  const rowsDetalles = [
    ['fecha de inicio:', 'XXXXXXX'],
    ['fecha de fin:', 'XXXXXXX'],
    ['cantidad de dias:', 'XXXXXXX'],
    ['observaciones:', 'XXXXXXX'],
    ['autorizado por:', 'XXXXXXX']
  ]
  const data = [
    { key: "1", value: "Pendiente " },
    { key: "2", value: "Confirmada " },
    { key: "4", value: "Rechazada" },
  ]


  const element = (data, index) => (
    <Button
      title="DETALLES"
      style={styles.btn}
      titleStyle={styles.btnText}
      onPress={() => setVisible(true)}
    />
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <Box style={{ marginTop: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontFamily: "Arimo", fontSize: 20 }}>
            HISTORIAL NOVEDADES{" "}
          </Text>
          <Box></Box>
        </View>

        <View>
          <Table borderStyle={{ borderColor: "transparent" }}>
            <Row data={headers} style={styles.head} textStyle={styles.title} />
            {rows.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={cellIndex === 3 ? element(cellData, index) : cellData}
                    textStyle={styles.text}
                  />
                ))}
              </TableWrapper>
            ))}
          </Table>
        </View>
        <Detalles visible={visible}>
          <View style={{ alignItems: "center" }}>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => setVisible(false)}>   
            <Image source={require("../assets/cancel.png")} style={styles.cancel}/>
            </TouchableOpacity>
            </View>
            <View style={styles.modalHeader}>
              <Text style={{fontFamily: 'armio'}}>Licencia Vacaciones</Text>
              <View style={styles.container2}>
                <Table>
                  <Rows data={rowsDetalles} textStyle={{margin: 10}}/>
                </Table>
              </View>
                  <Text>ESTADO:</Text>
                  <SelectList data={data}
                  setSelected={setEstado}
                  save={'value'}
                  placeholder={estado}
                  boxStyles={{width:150}}
                  />
            </View>
          </View>
        </Detalles>
      </Box>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: { height: 40 },
  title: { color: "#0072B7", fontFamily: "Arimo", textAlign: "center" },
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
  container2: {width: 350, margin: 20, marginLeft: 100},
  cancel: {height: 20, width: 20}
});

export default VerSolicitudes;
