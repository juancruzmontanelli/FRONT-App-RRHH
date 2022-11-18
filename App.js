import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import  StackNavigation  from "./navigation/StackNavigation"
import { Provider } from "react-redux";
import store from "./estados/store";

const App = () => {
  return (
  <Provider store={store}>
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
    </Provider>
  );
}


export default App