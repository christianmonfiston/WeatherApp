import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ActivityLoader = () => {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Homescreen"
          component={Home}
          options={{
            tabBarShowLabel: true,
            title: "Home",
            headerTintColor: "#7B71EC",
            drawerStyle: {
              backgroundColor: "#7B71EC",
              width: 240,
            },
            //headerShown: true,
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <View style={styles.loader}>
      {isLoading && (
        <View>
          <ActivityIndicator size={"large"} color={"#7B71EC"} />
        </View>
      )}
    </View>
  );
};

export default ActivityLoader;

const styles = StyleSheet.create({});
