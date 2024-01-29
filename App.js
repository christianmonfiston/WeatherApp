import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
//Screens to Import
import LandingPage from "./screens/LandingPage";
import Onboarding from "./components/Onboarding";
import Signup from "./screens/Signup";
export default function App() {
  return <Signup />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
