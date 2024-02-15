import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native";
import { FIREBASE_AUTH } from "../components/FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

const Signup = ({ navigation }) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const auth = FIREBASE_AUTH;

  const onChangeText = (key, value) => {
    if (key === "username") setUsername(value);
    else if (key === "email") setEmail(value);
    else if (key === "password") setPassword(value);
  };

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      Alert.alert("Check your email");
    } catch (error) {
      console.log(error);
      Alert.alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      Alert.alert("Check your email");
    } catch (error) {
      console.log(error);
      //Alert.alert("Account creation failed");
      if (error) {
        setErrorMessage(FirebaseError.Firebase);
        Alert.alert("Password should be at least 6 characters");
      }
    } finally {
      setLoading(false);
    }
  };

  const buttonPress = () => {
    // signUp();
    signIn();
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.container}>
            <View style={styles.title}>
              <Image
                style={styles.image}
                source={require("../images/WeatherIcon-1.png")}
              />
              <View style={styles.subtitle}>
                <Text style={styles.titleText}>Create your account </Text>
                <Text style={styles.titleTextTwo}>!</Text>
              </View>
            </View>
            <View style={styles.userDetailsContainer}>
              <View style={styles.emailBox}>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={"white"}
                  keyboardType="email-address"
                  selectionColor={"white"}
                  cursorColor={"white"}
                  style={styles.userSelect}
                  onChangeText={(text) => onChangeText("email", text)}
                />
              </View>
              <View style={styles.passwordBox}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={"white"}
                  selectionColor={"white"}
                  cursorColor={"white"}
                  style={styles.userSelect}
                  secureTextEntry
                  onChangeText={(text) => onChangeText("password", text)}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.button} onPress={buttonPress}>
                <View style={styles.signupDisplay}>
                  <Text style={{ color: "#7B71EC", fontSize: 15 }}>
                    Sign up{" "}
                  </Text>
                  <Image
                    style={styles.imageArrow}
                    source={require("../images/Arrow.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.termsText}>
                By continuing, I accept Cloudly's
              </Text>
              <Text style={styles.termsLinkText}>
                Terms of Service and Privacy Policy
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
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
  title: {
    color: "white",
    fontSize: 25,
  },
  subtitle: {
    flexDirection: "row",
  },
  titleText: {
    color: "white",
    fontSize: 25,
  },
  titleTextTwo: {
    color: "#7B71EC",
    fontSize: 25,
  },
  image: {
    width: 200,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  userDetailsContainer: {
    margin: 10,
    flexDirection: "column",
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
  signupDisplay: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 100,
    left: 25,
  },
  imageArrow: {
    width: 100,
    height: 10,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  userSelect: {
    width: 300,
    height: 60,
    left: 20,
    color: "white",
  },
  termsText: {
    color: "white",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 5,
  },
  termsLinkText: {
    color: "#7B71EC",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
