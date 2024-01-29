import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native";
const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title}>Create your account</Text>
        </View>
        <View style={styles.userDetailsContainer}>
          <View style={styles.userNameBox}>
            <TextInput placeholder="Username" placeholderTextColor={"white"} />
          </View>
          <View style={styles.emailBox}>
            <TextInput placeholder="Email" placeholderTextColor={"white"} />
          </View>
          <View style={styles.passwordBox}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={"white"}
              selectionColor={"white"}
            />
          </View>
        </View>
        <View>
          <Pressable style={styles.button}>
            <Text style={{ color: "black", fontSize: 15 }}> Sign up </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
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
  userNameBox: {
    borderWidth: 2,
    borderColor: "#7B71EC",
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 25,
    backgroundColor: "#383567",
  },
  emailBox: {
    borderWidth: 2,
    borderColor: "#7B71EC",
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 25,
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
  },

  button: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
