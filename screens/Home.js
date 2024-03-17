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
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import { Modal } from "react-native";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

//API KEY
export const API_KEY = "cbd6b620470d2e828e67c06ecdbcf8a3";

//More Weather Data
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const Home = () => {
  const [selectedId, setSelectedId] = useState();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [Weather, setWeather] = useState(true);
  const [search, setSearch] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [display, setDisplay] = useState("");
  ///Data info
  let [feel, setFeel] = useState();
  let [humidity, setHumidity] = useState();
  let [temperature, setTemperature] = useState();
  let [clouds, setClouds] = useState();
  let [name, setName] = useState();
  const [isModalVisible, setIsModalVisble] = useState(false);
  let userText = input;
  //Show/ Not SHow ui

  let [show, setShow] = useState(false);
  const api = {
    key: "9b0d9d947e970792daca2304d5a312be",
    baseUrl: "http://api.openweathermap.org/data/2.5/",
  };

  function RenderInfoUI() {
    return (
      <View>
        <Text style={{ fontSize: 100 }}>Working</Text>
      </View>
    );
  }
  DATA = [
    {
      id: 1,
      title: temperature,
    },
    {
      id: 2,
      title: temperature,
    },
    {
      id: 3,
      title: temperature,
    },
    {
      id: 4,
      title: temperature,
    },
    {
      id: 5,
      title: temperature,
    },
    {
      id: 6,
      title: temperature,
    },
  ];
  const fetchDataHandler = useCallback(() => {
    setIsSent(true);
    setIsModalVisble(true);
    setShow(true);

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

        //get Humidity
        setHumidity(res.data.main.feels_like);
        console.log(humidity);

        //get feels Like
        setFeel(Math.round(res.data.main.feels_like - 273.15));

        //Get What the user type

        setSearch(res.data.name);
        console.log(search);
      })
      .catch((e) => console.dir(e))
      .finally(() => setLoading(false));
  }, [api.key, input]);

  function onChangeText(onChangeText) {
    setInput(onChangeText);
    console.log(input);
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
     
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            style={styles.imageStyle}
            source={require("../images/Cloud.png")}
          />
        </View>
        <View>
          <View style={styles.topDisplay}>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Search city or country!!"
                placeholderTextColor={"white"}
                style={styles.userSelect}
                onSubmitEditing={fetchDataHandler}
                onChangeText={onChangeText}
              />
            </View>

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

          <View style={styles.Cards}>
            <View categoryTwo>
              <View style={styles.displayCardOne}>
                <Text style={{ fontSize: 30, color: "white" }}>
                  Temperature:
                </Text>
                <Text style={styles.textInfo}>{temperature}°C</Text>
                <Image
                  style={{
                    width: 300,
                    height: 200,
                    left: 20,
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                  source={require("../images/Thermometer.png")}
                />
              </View>
            </View>

            <View style={styles.categoryTwo}>
              <View style={styles.displayCardTwo}>
                <Text style={{ fontSize: 15, color: "white" }}>
                  How it feels:
                </Text>
                <Text style={styles.textInfo}>{feel}</Text>
              </View>
              <View style={styles.displayCardThree}>
                <Text style={{ fontSize: 30, color: "white" }}>Humidity:</Text>
                <Text style={styles.textInfo}>{humidity}</Text>
              </View>
            </View>
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
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  imageStyle: {
    width: 250,
    height: 100,
  },

  displaySearch: {
    color: "black",
    fontSize: 50,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    // marginBottom: 5,
    textDecorationLine: "underline",
    textDecorationColor: "#c6f432",
    width: 200,
    height: 45,
    backgroundColor: "black",
    borderRadius: 200,
    borderWidth: 1,
    borderColor: "#fec4dd",
  },

  displayText: {
    fontSize: 15,
    color: "#fec4dd",
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

  userSelect: {
    width: 300,
    height: 60,
    left: 20,
    color: "white",
  },

  bottomSheet: {
    width: 200,
    height: 10,
    backgroundColor: "pink",
  },

  Cards: {
    flexDirection: "row",
  },
  displayCardOne: {
    width: 190,
    height: 300,
    backgroundColor: "white",
    borderRadius: 25,
    marginRight: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  displayCardTwo: {
    width: 160,
    height: 140,
    backgroundColor: "#ff6a00",
    borderRadius: 25,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  displayCardThree: {
    width: 160,
    height: 140,
    backgroundColor: "#00ff84",
    borderRadius: 25,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  categoryTwo: {
    flexDirection: "column",
    justifyContent: "space-between",
  },

  colors: {
    backgroundColor: "#c6f432", //light gren
    backgroundColor: "#7B71EC", //purple
    backgroundColor: "#fec4dd", //pink
    backgroundColor: "#0084ff", //blue
    backgroundColor: "#ff6a00", //orange
    backgroundColor: "#00ff84", //pale green
  },

  textInfo: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
