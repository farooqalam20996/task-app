import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Background, primary, secondary } from "./colors";
import { LinearGradient } from "expo-linear-gradient";

const Container = (props) => {
  return (
    <View style={[styles.mainContainer, { ...props.mainStyle }]}>
      <LinearGradient
        colors={[secondary, primary]}
        start={{ x: 0.6, y: 0.5 }}
        end={{ x: 0.1, y: 0.5 }}
        style={{ flex: 1 }}
      >
        {props.children}
      </LinearGradient>
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // padding: heightPercentageToDP("2%"),
    // backgroundColor: Background,
  },
});
