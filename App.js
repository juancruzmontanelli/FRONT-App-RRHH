import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import  StackNavigation  from "./navigation/StackNavigation"

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
}


export default App