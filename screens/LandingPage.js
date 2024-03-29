import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { Image } from "react-native";
import { Pressable } from "react-native";

import { TouchableOpacity } from "react-native";
import { NavigationAction } from "@react-navigation/native";
function LandingPage({ navigation }) {
  function buttonPress() {
    navigation.navigate("Signup");
  }

  function LoginPress() {
    navigation.navigate("Login");
    console.log("Login has been pressed");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../images/HappyCloud.png")}
          />
          <Text style={styles.degreeDisplay}>18&#8451;</Text>
          <Text style={{ color: "white" }}>New York, NY</Text>
        </View>
        <View style={styles.textDisplay}>
          <View style={styles.firstTextMessage}>
            <Text style={styles.displayOne}>Cloudly</Text>
          </View>

          <Text style={styles.displayText}>Start now and learn more about</Text>
          <Text style={styles.displayTextTwo}>the weather anywhere!</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={buttonPress}>
          <Pressable onPress={buttonPress}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.displayLowerText}>Already have an account? </Text>
          <TouchableOpacity onPress={LoginPress}>
            <Pressable onPress={LoginPress}>
              <Text style={styles.displayLowerTextTwo}>Login</Text>
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LandingPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  degreeDisplay: {
    fontSize: 100,
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  card: {
    backgroundColor: "black",
    width: 340,
    height: 340,
    borderRadius: 50,
    borderWidth: 1.1,
    borderColor: "#7B71EC",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  textDisplay: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingVertical: 15,
    paddingBottom: 105,
  },

  displayOne: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 20,
  },

  displayTwo: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  image: {
    width: 400,
    height: 150,
  },

  button: {
    width: 250,
    height: 50,
    borderRadius: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    //paddingVertical: 10,
    marginVertical: 5,
  },

  buttonText: {
    color: "#7B71EC",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  displayText: { color: "white", fontSize: 16 },

  displayTextTwo: { color: "#7B71EC", fontSize: 16 },
  displayLowerText: { color: "white", fontSize: 15, marginTop: 10 },
  displayLowerTextTwo: { color: "#7B71EC", fontSize: 15, marginTop: 10 },
  firstTextMessage: {
    paddingVertical: 10,
  },
});
