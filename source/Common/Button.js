import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  Background,
  black,
  gray,
  lightGray,
  primary,
  Text_Primary,
  white,
} from "./colors";
import { MaterialIcons } from "@expo/vector-icons";

export const Button = ({
  Title,
  btnStyle,
  TxtStyle,
  isIcon,
  Icon,
  Onpress,
  isAdd,
  otherProps,
}) => {
  return (
    <TouchableOpacity
      {...otherProps}
      activeOpacity={1}
      style={[styles.main, { ...btnStyle }]}
      onPress={Onpress}
    >
      {!isAdd && <Text style={{ color: primary }}>abc</Text>}
      <Text style={[styles.Txt, { ...TxtStyle }]}>{Title}</Text>
      {isIcon && Icon}
    </TouchableOpacity>
  );
};

export const Social_Button = ({ Title, btnStyle, TxtStyle, Icon, Onpress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.Socialmain, { ...btnStyle }]}
      onPress={Onpress}
    >
      {Icon}
      <Text style={[styles.SocialTxt, { ...TxtStyle }]}>{Title}</Text>
      <Text style={{ color: gray }}>abc</Text>
    </TouchableOpacity>
  );
};

export const Simple_Button = ({ Onpress, Title, mainStyle, TitleStyle }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[styles.simplebtn, { ...mainStyle }]}
      onPress={Onpress}
    >
      <Text style={TitleStyle}>{Title}</Text>
    </TouchableOpacity>
  );
};

export const Advance_Button = ({
  Onpress,
  Title,
  mainStyle,
  TitleStyle,
  subTitle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.advButton}
      onPress={Onpress}
    >
      <Text style={{ color: white, fontSize: hp("2.5%") }}>{Title}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Text style={{ color: white, fontSize: hp("1.5%") }}>{subTitle}</Text>
        <MaterialIcons name="arrow-forward-ios" size={24} color={white} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: primary,
    flexDirection: "row",
  },
  Socialmain: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: gray,
    flexDirection: "row",
    width: "100%",
    height: hp("6%"),
    borderRadius: hp("1%"),
    marginVertical: hp("1.5%"),
  },
  Txt: {
    color: black,
    // fontFamily: "Bold",
    fontSize: hp("2.2%"),
  },

  SocialTxt: {
    color: Text_Primary,
    // fontFamily: "Regular",
    fontSize: hp("2.5%"),
  },
  simplebtn: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: hp("5%"),
    // borderRadius:hp("1%"),
    // marginVertical:hp("1.5%")
  },
  advButton: {
    width: "100%",
    height: hp("8%"),
    // backgroundColor: lightGray,
    borderColor: lightGray,
    borderWidth: 2,
    borderRadius: hp("1.2%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: hp("1%"),
    marginTop: hp("2%"),
  },
});
