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
export const API_KEY = "cbd6b620470d2e828e67c06ecdbcf8a3";

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  const api = {
    key: "9b0d9d947e970792daca2304d5a312be",
    baseUrl: "http://api.openweathermap.org/data/2.5/",
  };

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setInput("");
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.dir(e))
      .finally(() => setLoading(false));
  }, [api.key, input]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            placeholder="Add location"
            placeholderTextColor={"white"}
            style={styles.textInput}
            onSubmitEditing={fetchDataHandler}
          />

          {isLoading && (
            <View>
              <ActivityIndicator size={"large"} color={"#7B71EC"} />
            </View>
          )}
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
