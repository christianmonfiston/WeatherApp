import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { Image } from "react-native";
import { Pressable } from "react-native";

import { TouchableOpacity } from "react-native";

export default function LandingPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../images/sunicon.png")}
          />
          <Text style={styles.degreeDisplay}>18&#8451;</Text>
          <Text style={{ color: "#FFB800" }}>New York, NY</Text>
        </View>
        <View style={styles.textDisplay}>
          <View style={styles.firstTextMessage}>
            <Text style={styles.displayOne}>Cloudly</Text>
          </View>

          <Text style={styles.displayText}>Start now and learn more about</Text>
          <Text style={styles.displayText}>local weather instantly.</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Pressable>
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </TouchableOpacity>
        <View>
          <Text style={styles.displayLowerText}> Already have an account?</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

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
    color: "#FFB800",
  },

  displayTwo: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  image: {
    width: 100,
    height: 100,
  },

  button: {
    backgroundColor: "white",
    width: 250,
    height: 50,
    borderRadius: 40,
    backgroundColor: "#7B71EC",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    //paddingVertical: 10,
    marginVertical: 5,
  },

  buttonText: {
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  displayText: { color: "white", fontSize: 20 },
  displayLowerText: { color: "#FFB800", fontSize: 15, marginTop: 10 },

  firstTextMessage: {
    paddingVertical: 10,
  },
});
