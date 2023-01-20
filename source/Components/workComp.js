import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { ParagraphTxt } from "../Common/CustomTxt";
import { white } from "../Common/colors";
import { heightPercentageToDP } from "react-native-responsive-screen";

export default function WorkComp({ backImage, label, NoOfPhotos }) {
  return (
    <ImageBackground
      style={styles.Container}
      resizeMode={"cover"}
      source={backImage}
      borderRadius={15}
    >
      <ParagraphTxt
        Paragraph={label}
        otherStyle={{
          color: white,
          alignSelf: "center",
        }}
      />
      <ParagraphTxt
        Paragraph={NoOfPhotos}
        otherStyle={{
          color: white,
          alignSelf: "center",
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: heightPercentageToDP("13%"),
    height: 130,
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: heightPercentageToDP("1%"),
    elevation: 10,
  },
});
