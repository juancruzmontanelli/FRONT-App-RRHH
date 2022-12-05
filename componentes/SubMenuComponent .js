import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Button } from "@react-native-material/core";
import { View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

const SubMenuComponent = ({ modo, navigation, setVisible }) => {
  const usuario = useSelector((estado) => estado.usuarios.infoDeUsuario);
  return (
    <View style={{ alignItems: "center" }}>
      {modo === "novedad" ? (
        <View>
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
            title="Mis Solicitudes"
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
              navigation.navigate("VerSolicitudes");
            }}
          />
          {usuario.tipo ? (
            <Button
              title="Solicitudes Usuarios"
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
                navigation.navigate("SuperUsuarioNovedades");
              }}
            />
          ) : (
            ""
          )}
        </View>
      ) : (
        ""
      )}
      {usuario.tipo ? (
        <>
          {modo === "usuario" ? (
            <View>
              <Button
                title="VER PERFIL"
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
                  navigation.navigate("Usuario");
                }}
              />
              <Button
                title="CREAR USUARIO"
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
                  navigation.navigate("Registros");
                  setVisible(false);
                }}
              />
              <Button
                title="EDITAR USUARIO"
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
                }}
              />
            </View>
          ) : (
            ""
          )}
          {modo === "equipo" ? (
            <View>
              <Button
                title="VER EQUIPOS"
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
                  navigation.navigate("Equipos");
                }}
              />
              <Button
                title="CREAR EQUIPO"
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
                  navigation.navigate('Crear Equipo')
                }}
              />
            </View>
          ) : (
            ""
          )}
          {modo === "Oficinas" ? (
            <View>
              <Button
                title="VER OFICINAS"
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
                  navigation.navigate("Oficinas");
                }}
              />
              <Button
                title="CREAR OFICINA"
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
                  navigation.navigate("CrearOficina");
                }}
              />
            </View>
          ) : (
            ""
          )}
          {modo === "asistencia" ? (
            <View>
              <Button
                title="VER ASISTENCIA"
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
                }}
              />
              <Button
                title="ASISTEMCIA USUARIO"
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
                }}
              />
            </View>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </View>
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

export default SubMenuComponent;
