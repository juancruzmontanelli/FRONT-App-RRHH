import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "@react-native-material/core";
import { FontAwesome5 } from "@expo/vector-icons";

function Perfil({ object, name }) {
  return (
    <View style={styles.profileContainer}>
      <Avatar style={styles.avatarStyle} label={name} size={200} autoColor />
      {Object.keys(object).map((key) => (
        <View key={Math.random(Math.random(33) * 33)} style={styles.listItem}>
          <Text style={styles.listItemKey}>{key}</Text>
          <Text style={styles.listItemContent}>
            {typeof object[key] === "string" ? (
              object[key]
            ) : (
              <FontAwesome5
                name={object[key] ? "user-alt" : "user-slash"}
                color={object[key] ? "green" : "red"}
                size={20}
              />
            )}
          </Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 114, 183, 0.6)",
    alignItems: "center",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    paddingHorizontal: "5%",
    paddingVertical: "3%",
    borderRadius: 20,
    backgroundColor: "white",
    borderWidth: 1,
    marginBottom: "1%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  listItemKey: { fontSize: 16 },
  listItemContent: { fontSize: 17, fontWeight: "300" },
  avatarStyle: { marginVertical: "10%", borderWidth: 1 },
});
export default Perfil;
