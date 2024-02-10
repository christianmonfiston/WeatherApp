import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ActivityLoader = () => {
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
