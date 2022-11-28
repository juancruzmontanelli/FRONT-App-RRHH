import useState from "react";
import {
  Text,
  SafeAreaView,
  Image,
  View,

  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Box, TextInput, Button } from "@react-native-material/core";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from "@react-native-community/datetimepicker";


const Novedades = () => {
  // DROPDOWN STATE
  const [tipo, setTipo] = useState("");
  const [id, setId] = useState("");

  // DATE STATES
  const [fecha, setFecha] = useState(new Date());
  const [modo, setModo] = useState("date");
  const [display, setDisplay] = useState("");
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("select");
  const [input2, setInput2] = useState("select");
  const [button, setButton] = useState(0);

  // OBSERVACIONES STATE
  const [observaciones, setObservaciones] = useState("");

  // DROPDOWN DATA
  const data = [
    { key: "1", value: "Licencia Vacaciones" },
    { key: "2", value: "Hora Extra" },
    { key: "4", value: "Llegada Tarde" },
    { key: "4", value: "Retiro Fuera de Horario" },
    { key: "4", value: "Ingreso Fuera de Horario" },
    { key: "1", value: "Ausencia con Aviso" },
    { key: "4", value: "Ausencia sin Aviso" },
    { key: "4", value: "Home Office" },
    { key: "2", value: "Feriados" },
    { key: "4", value: "Licencia justificada" },
    { key: "4", value: "Licencia por enfermedad" },
    { key: "4", value: "Guardia" },
    { key: "4", value: "Licencia Estudio" },
    { key: "2", value: "Horas Nocturnidad" },
    { key: "3", value: "Otros" },
  ];

  // DATE HANDLERS
  const onChange = (event, fechaSeleccionada) => {
    const fechaActual = fechaSeleccionada || fecha;
    setShow(Platform.OS === "ios");
    setFecha(fechaActual);
    let tempDate = new Date(fechaActual);
    if (modo === "date") {
      let fDate =
        tempDate.getDate() +
        "/" +
        (tempDate.getMonth() + 1) +
        "/" +
        tempDate.getFullYear();
      button == 1 ? setInput(fDate) : setInput2(fDate);
    }
    if (modo === "time") {
      let fTime =
        tempDate.getHours() +
        " : " +
        (tempDate.getMinutes() < 10 ? "0" : "") +
        tempDate.getMinutes();
      button == 1 ? setInput(fTime) : setInput2(fTime);
    }
  };

  const showMode = (modoActual, displayActual) => {
    setShow(true);
    setModo(modoActual);
    setDisplay(displayActual);
  };

  // OBSERVACIONES HANDLER
  const observacionesInput = (e) => {
    setObservaciones(e);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <KeyboardAvoidingView>
        <ScrollView>
          <Box
            style={{
              marginTop: "10%",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 130,
                height: 130,
              }}
              source={require("../assets/megafono.png")}
            />
            <Text
              style={{fontSize: 30, marginBottom: 10 }}
            >
              NOVEDADES
            </Text>
            <View
              style={{
                marginBottom: 25,
                width: 380,
              }}
            >
              <Text
                style={{ fontSize: 15, marginBottom: 10 }}
              >
                {" "}
                Tipo De Novedad
              </Text>
              <SelectList
                data={data}
                setSelected={setTipo}
                save="value"
                onSelect={() => {
                  setInput("SELECT");
                  setInput2("SELECT");
                  data.map((obj) => {
                    if (obj.value === tipo) {
                      setId(obj.key);
                    }
                  });
                }}
              />
            </View>
            {tipo ? (
              <View
                style={{
                  marginBottom: 25,
                  width: 380,
                }}
              >
                <Text
                  style={{
               
                    fontSize: 15,
                    marginBottom: 10,
                  }}
                >
                  {" "}
                  Fecha De Inicio
                </Text>
                <Button
                  title={input}
                  onPress={() => {
                    showMode("date", "default");
                    setButton(1);
                  }}
                  style={{
                    backgroundColor: "#0072b7",
                    marginTop: 10,
                    width: 380,
                    flex: 1,
                    paddingVertical: 0,
                  }}
                ></Button>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={fecha}
                    mode={modo}
                    is24Hour={true}
                    display={display}
                    onChange={onChange}
                  />
                )}
              </View>
            ) : (
              ""
            )}

            {id === "1" ? (
              <View
                style={{
                  marginBottom: 25,
                  width: 380,
                }}
              >
                <Text
                  style={{
       
                    fontSize: 15,
                    marginBottom: 10,
                  }}
                >
                  {" "}
                  Fecha De Final
                </Text>
                <Button
                  title={input2}
                  onPress={() => {
                    showMode("date", "default");
                    setButton(2);
                  }}
                  style={{
                    backgroundColor: "#0072b7",
                    marginTop: 10,
                    width: 380,
                    flex: 1,
                    paddingVertical: 0,
                  }}
                ></Button>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={fecha}
                    mode={modo}
                    is24Hour={true}
                    display={display}
                    onChange={onChange}
                  />
                )}
              </View>
            ) : (
              ""
            )}

            {id === "2" ? (
              <View
                style={{
                  marginBottom: 25,
                  width: 380,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    marginBottom: 10,
                  }}
                >
                  {" "}
                  Cantidad De Horas
                </Text>
                <Button
                  title={input2}
                  onPress={() => {
                    showMode("time", "default");
                    setButton(2);
                  }}
                  style={{
                    backgroundColor: "#0072b7",
                    marginTop: 10,
                    width: 380,
                    flex: 1,
                    paddingVertical: 0,
                  }}
                ></Button>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={fecha}
                    mode={modo}
                    is24Hour={true}
                    display={display}
                    onChange={onChange}
                  />
                )}
              </View>
            ) : (
              ""
            )}

            {id === "3" ? (
              <View
                style={{
                  marginBottom: 25,
                  width: 380,
                }}
              >
                <TextInput
                  onChangeText={observacionesInput}
                  placeholder="Observaciones"
                  style={{ flex: 1, paddingVertical: 0, margintop: 10 }}
                ></TextInput>

                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={fecha}
                    mode={modo}
                    is24Hour={true}
                    display={display}
                    onChange={onChange}
                  />
                )}
              </View>
            ) : (
              ""
            )}

            <View>
              <Button
                title="ENVIAR"
                style={{
                  backgroundColor: "#0072b7",
                  marginTop: 30,
                  width: 130,
                }}
              ></Button>
            </View>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Novedades;
