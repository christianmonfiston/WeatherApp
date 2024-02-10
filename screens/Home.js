import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  Text,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { TextInput } from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Alert } from "react-native";
export const API_KEY = "cbd6b620470d2e828e67c06ecdbcf8a3";

let Davos = "Davos";
const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [Weather, setWeather] = useState(true);
  const [search, setSearch] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [display, setDisplay] = useState("");
  let [temperature, setTemperature] = useState();

  let userText = input;

  const api = {
    key: "9b0d9d947e970792daca2304d5a312be",
    baseUrl: "http://api.openweathermap.org/data/2.5/",
  };

  const fetchDataHandler = useCallback(() => {
    setIsSent(true);

    if (isSent == true) {
      setDisplay(input);
    }
    setLoading(true);
    setInput("");
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api.key}`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setTemperature(Math.round(res.data.main.temp - 273.15));
        console.log(temperature);
      })
      .catch((e) => console.dir(e))
      .finally(() => setLoading(false));
  }, [api.key, input]);

  //test

  function onChangeText(onChangeText) {
    setInput(onChangeText);
    console.log(input);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.topDisplay}>
            <TextInput
              placeholder="Search city"
              placeholderTextColor={"white"}
              style={styles.textInput}
              onSubmitEditing={fetchDataHandler}
              onChangeText={onChangeText}
            />

            <TouchableOpacity
              style={styles.sendButton}
              onPress={fetchDataHandler}
            >
              <Pressable style={styles.sendButton} onPress={fetchDataHandler}>
                <Image
                  source={require("../images/Search.png")}
                  style={styles.image}
                />
              </Pressable>
            </TouchableOpacity>
          </View>
          <View style={styles.displaySearch}>
            <Text style={styles.displaySearch}>{display}</Text>
            <Text style={styles.displaySearch}>{temperature}</Text>
          </View>
        </View>
      </SafeAreaView>
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

  displaySearch: {
    color: "white",
    fontSize: 40,
  },

  textInput: {
    borderWidth: 2,
    borderColor: "#7B71EC",
    width: 275,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    marginBottom: 25,
    backgroundColor: "#383567",
    marginTop: 25,
    color: "white",
    fontSize: 16,
  },

  sendButton: {
    width: 75,
    height: 60,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  topDisplay: {
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: "space-evenly",
    paddingBottom: 10,
  },

  image: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  loader: {
    marginVertical: 100,
  },
});
