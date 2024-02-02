import { StyleSheet, Text, View, TextInput, Keyboard } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-ionicons";
import { IconProps } from "react-native-ionicons";

const Home = ({ navigation }) => {
  const IconBar = () => (
    <View>
      <Icon name="search-outline" />

      <Icon ios="ios-search-outline" android="md-search-outline" />
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Home</Text>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Enter your location"
            style={styles.textInput}
          />
          <IconBar />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
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
});
