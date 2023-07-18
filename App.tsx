import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/native";
import { AuthProvider } from "./src/context/Auth";
import Routes from "./src/routes";
import { darkTheme } from "./src/theme/colors";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme as DefaultTheme}>
      <StatusBar barStyle={"light-content"} backgroundColor="#333" />
      {/* <View style={{ flex: 1, backgroundColor: "#333" }}> */}
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
      {/* </View> */}
    </ThemeProvider>
  );
}
