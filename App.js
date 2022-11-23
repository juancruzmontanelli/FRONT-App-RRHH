import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";
import { Provider } from "react-redux";
import store from "./estados/store";
import { IconComponentProvider } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const App = () => {
  return (
    <Provider store={store}>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </IconComponentProvider>
    </Provider>
  );
};

export default App;
