import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Text_Primary } from "./colors";

export const HeadingTxt = ({ Heading, otherStyle, Onpress, otherProps }) => {
  return (
    <Text
      {...otherProps}
      style={[styles.Heading, { ...otherStyle }]}
      onPress={Onpress}
    >
      {Heading}
    </Text>
  );
};

export const ParagraphTxt = ({ Paragraph, otherStyle, Onpress }) => {
  return (
    <Text style={[styles.Paragraph, { ...otherStyle }]} onPress={Onpress}>
      {Paragraph}
    </Text>
  );
};

const styles = StyleSheet.create({
  Heading: {
    fontSize: hp("4%"),
    // fontFamily: "Bold",
    color: Text_Primary,
  },
  Paragraph: {
    fontSize: hp("2%"),
    // fontFamily: "Regular",
    textAlign: "justify",
    color: Text_Primary,
  },
});
