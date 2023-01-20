import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
// Local
import { Button } from "../../Common/Button";
import {
  Background,
  primary,
  secondary,
  Text_Primary,
} from "../../Common/colors";
import { HeadingTxt, ParagraphTxt } from "../../Common/CustomTxt";

const Introduction = ({ navigation }) => {
  return (
    <LinearGradient
      start={{ x: 0.5, y: 0.1 }}
      end={{ x: 0.1, y: 0.2 }}
      colors={[primary, secondary]}
      style={{ flex: 1 }}
    >
      <View style={styles.main}>
        <HeadingTxt Heading={"Introduction"} />
        <ParagraphTxt
          Paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
        <Button
          Title={"Next"}
          btnStyle={styles.btn}
          isIcon={true}
          Onpress={() => navigation.navigate("Profile_Tab")}
          Icon={
            <Ionicons
              name={"arrow-forward"}
              size={hp("2.5%")}
              color={"black"}
              style={{ marginLeft: hp("2%") }}
            />
          }
        />
      </View>
    </LinearGradient>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // alignItems:"center",
    // backgroundColor: Background,
    padding: hp("2%"),
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: hp("18%"),
    height: hp("6%"),
    borderRadius: hp("5%"),
    marginTop: hp("5%"),
    alignSelf: "flex-end",
  },
});
