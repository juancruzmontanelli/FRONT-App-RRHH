import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Button } from "@react-native-material/core";
import { View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  FontAwesome5,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const SubMenuComponent = ({ modo, navigation, setVisible }) => {
  const usuario = useSelector((estado) => estado.usuarios.infoDeUsuario);
  return (
    <View style={{ alignItems: "center" }}>
      {modo === "novedad" ? (
        <View>
          <Button
            title="Nueva novedad"
            tintColor="#f89c1c"
            disableElevation={true}
            titleStyle={styles.textButton}  
            style={styles.button}
            trailing={(props) => <Icon name="send"  style={styles.Icon} {...props} />}
            onPress={() => {
              setVisible(false);
              navigation.navigate("Novedades");
            }}
          />
          <Button
            title="Mis Solicitudes"
            tintColor="#f89c1c"
            disableElevation={true}
            titleStyle={styles.textButton}
            style={styles.button}
            trailing={(props) => <Icon name="history"  style={styles.Icon} {...props} />}
            onPress={() => {
              setVisible(false);
              navigation.navigate("VerSolicitudes");
            }}
          />
          {usuario.tipo ? (
            <Button
              title="Solicitudes Usuarios"
              tintColor="#f89c1c"
              disableElevation={true}
              titleStyle={styles.textButton}
              style={styles.button}
              trailing={(props) => <Icon name="history"  style={styles.Icon} {...props} />}
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
                disableElevation={true}
                titleStyle={styles.textButton}
                style={styles.button}
                trailing={(props) => <FontAwesome5 style={styles.Icon} name="user-alt" />}
                onPress={() => {
                  setVisible(false);
                  navigation.navigate("Usuario");
                }}
              />
              <Button
                title="CREAR USUARIO"
                tintColor="#f89c1c"
                disableElevation={true}
                titleStyle={styles.textButton}
                style={styles.button}
                trailing={(props) => <FontAwesome5 style={styles.Icon} name="user-plus" size={24} color="black" />}
                onPress={() => {
                  navigation.navigate("Registros");
                  setVisible(false);
                }}
              />
              <Button
                title="EDITAR USUARIO"
                tintColor="#f89c1c"
                disableElevation={true}
                titleStyle={styles.textButton}
                style={styles.button}
                trailing={(props) => <FontAwesome5 style={styles.Icon} name="user-edit" size={24} color="black" />}
                onPress={() => {
                  navigation.navigate('DatosUsuario')
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
                disableElevation={true}
                titleStyle={styles.textButton}
                style={styles.button}
                trailing={(props) => <FontAwesome5 style={styles.Icon} name="users" size={24} color="black" />}
                onPress={() => {
                  setVisible(false);
                  navigation.navigate("Equipos");
                }}
              />
              <Button
                title="CREAR EQUIPO"
                tintColor="#f89c1c"
                disableElevation={true}
                titleStyle={styles.textButton}
                style={styles.button}
                trailing={(props) => <MaterialIcons style={styles.Icon} name="create" size={24} color="black" />}
                onPress={() => {
                  setVisible(false);
                  navigation.navigate("Crear Equipo");
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
                disableElevation={true}
                titleStyle={styles.textButton}
                style={styles.button}
                trailing={(props) =><FontAwesome style={styles.Icon} name="building" size={24} color="black" />}
                onPress={() => {
                  setVisible(false);
                  navigation.navigate("Oficinas");
                }}
              />
              <Button
                title="CREAR OFICINA"
                tintColor="#f89c1c"
                disableElevation={true}
                titleStyle={styles.textButton}
                style={styles.button}
                trailing={(props) => <MaterialIcons style={styles.Icon} name="create" size={24} color="black" />}
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
                disableElevation={true}
                titleStyle={styles.textButton}
                style={styles.button}
                trailing={(props) =>   <Icon
                  name="history"
                  style={styles.Icon}
                  {...props}
                />}
                onPress={() => {
                  setVisible(false);
                }}
              />
              <Button
                title="ASISTENCIA 
                  USUARIO"
                tintColor="#f89c1c"
                titleStyle={styles.textButton}
                disableElevation={true}
                style={styles.button}
                trailing={(props) => (
                  <Icon
                    name="history"
                    style={styles.Icon}
                    {...props}
                  />
                )}
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
  button: {
    backgroundColor: "rgba(0, 114, 183, 0.6)",
    marginTop: 10,
    marginBottom: 20,
    minWidth: 190,
    width: "50%",
    marginHorizontal: 4 / 2,
    borderWidth: 0.5,
  },
  textButton: { color: "#000000",fontSize:14, textAlign: 'center', fontWeight: "300", marginRight: 10},
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
  Icon: {
    fontSize: 15,
    color: "#000000",
    marginLeft: 5
  }
});

export default SubMenuComponent;
