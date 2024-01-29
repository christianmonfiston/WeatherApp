import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { useWindowDimensions } from "react-native";
import { Animated } from "react-native";
import { useRef, useState } from "react";
import OnboardingItem from "./OnboardingItem";
import Slide from "../slider/Slide";

import Paginator from "./Paginator";
export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const slidesRef = useRef(null);
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={Slide}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsVerticalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
          scrollEventThrottle={32}
        />
      </View>
      <Paginator data={Slide} scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
