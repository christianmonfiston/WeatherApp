import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Keyboard } from "react-native";
const Signup = ({ navigation }) => {
  function buttonPress() {
    navigation.navigate("Home");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Image
              style={styles.image}
              source={require("../images/WeatherIcon-1.png")}
            />
            <View style={styles.subtitle}>
              <Text style={styles.title}>Create your account </Text>
              <Text style={styles.titleTwo}>!</Text>
            </View>
          </View>
          <View style={styles.userDetailsContainer}>
            <View>
              <TextInput
                placeholder="    Username"
                placeholderTextColor={"white"}
                style={styles.userNameBox}
              />
            </View>
            <View>
              <TextInput
                placeholder="    Email"
                placeholderTextColor={"white"}
                keyboardType="email-address"
                style={styles.emailBox}
              />
            </View>
            <View>
              <TextInput
                placeholder="    Password"
                placeholderTextColor={"white"}
                selectionColor={"white"}
                cursorColor={"white"}
                style={styles.passwordBox}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={buttonPress}>
              <Pressable style={styles.button} onPress={buttonPress}>
                <Text style={{ color: "black", fontSize: 15 }}> Sign up </Text>
              </Pressable>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              By continuing, I accept Cloudly's
            </Text>
            <Text
              style={{
                color: "#7B71EC",
                fontSize: 15,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              Terms of Service and Privacy Policy
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  userDetailsContainer: {
    margin: 10,
    flexDirection: "column",
  },
  title: {
    color: "white",
    fontSize: 25,
  },

  titleTwo: {
    color: "#7B71EC",
    fontSize: 25,
  },

  subtitle: {
    flexDirection: "row",
  },
  userNameBox: {
    borderWidth: 2,
    borderColor: "#7B71EC",
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 25,
    backgroundColor: "#383567",
    marginTop: 25,
    color: "white",
    fontSize: 15,
  },
  emailBox: {
    borderWidth: 2,
    borderColor: "#7B71EC",
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 25,
    fontSize: 15,
    backgroundColor: "#383567",
  },
  passwordBox: {
    borderWidth: 2,
    borderColor: "#7B71EC",
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#383567",
    marginBottom: 20,
    fontSize: 15,
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    marginTop: 40,
  },

  image: {
    width: 200,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});
