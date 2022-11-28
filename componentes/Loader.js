import React from "react";
import { View, ActivityIndicator } from "react-native";

function Loader() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator
        size="large"
        color="#f89C1C"
        style={{ transform: [{ scale: 4 }] }}
      />
    </View>
  );
}

export default Loader;
