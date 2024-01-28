import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { Image } from "react-native";

const OnboardingItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.degreeDisplay}>{item.degree}</Text>
        <Text style={{ color: "white" }}>{item.location}</Text>
      </View>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 250,
    height: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    left: 5,
  },

  title: {
    //fontWeight: "800",
    //fontSize: 18,
    //marginBottom: 10,
    //textAlign: "center",
    //color: "#7B71EC",
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
    padding: 20,
  },

  description: {
    fontWeight: "300",
    color: "red",
    paddingHorizontal: 64,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "black",
    width: 350,
    height: 340,
    borderRadius: 50,
    borderWidth: 1.1,
    borderColor: "#7B71EC",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: 20,
  },

  degreeDisplay: {
    fontSize: 100,
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
