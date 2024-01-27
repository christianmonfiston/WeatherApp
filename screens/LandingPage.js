import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { Image } from "react-native";

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
          <Text style={{ color: "white" }}>New York, NY</Text>
        </View>
        <View style={styles.textDisplay}>
          <Text style={styles.displayOne}>
            Know everything{"\n"}about the weather
          </Text>
          <Text style={{ color: "white", fontSize: 15 }}>
            Start now and learn more about
          </Text>
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
  },

  displayOne: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  image: {
    width: 100,
    height: 100,
  },
});
