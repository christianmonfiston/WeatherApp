import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./screens/LandingPage";
import Onboarding from "./components/Onboarding";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Chat from "./screens/Chat";
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
    <StatusBar style="auto"/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: "#7B71EC",
            headerBackTitle: "Back",
            headerTitle: "",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerTintColor: "#7B71EC",
            headerBackTitle: "Back",
            headerTitle: "",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
