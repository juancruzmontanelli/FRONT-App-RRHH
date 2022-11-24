import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";
import { Provider } from "react-redux";
import store, { persistor } from "./estados/store";
import { IconComponentProvider } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </IconComponentProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
