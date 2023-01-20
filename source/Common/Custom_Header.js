import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Background, white } from "./colors";
import { HeadingTxt } from "./CustomTxt";
import { useNavigation } from "@react-navigation/native";

export const Header = ({ Heading, isBack, ifIcon, Icon, BackPress }) => {
  return (
    <View style={styles.HeaderStyle}>
      {isBack ? (
        <Ionicons
          name={"chevron-back"}
          size={hp("3%")}
          color={white}
          onPress={BackPress}
        />
      ) : (
        <Text style={{ color: Background }}>xyz</Text>
      )}

      <HeadingTxt Heading={Heading} otherStyle={{ fontSize: hp("2.5%") }} />

      {ifIcon ? Icon : <Text style={{ color: Background }}></Text>}
    </View>
  );
};

export const Profile_Header = ({ Heading, OnMenuPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.HeaderStyle}>
      <Ionicons name={"chevron-back"} size={hp("3%")} color={white} />

      <HeadingTxt
        Heading={Heading}
        otherStyle={{ fontSize: hp("3%"), marginLeft: hp("12%") }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <MaterialCommunityIcons
          name={"email-outline"}
          size={hp("3.5%")}
          color={white}
          style={{ marginHorizontal: hp("1%") }}
          onPress={() => navigation.navigate("MessageArea")}
        />
        <Ionicons
          name={"ios-notifications-outline"}
          size={hp("3.5%")}
          color={white}
          style={{ marginHorizontal: hp("1%") }}
          onPress={() => navigation.navigate("Notifications")}
        />
        <Entypo
          name={"dots-three-vertical"}
          size={hp("3.5%")}
          color={white}
          style={{ marginHorizontal: hp("1%") }}
          onPress={OnMenuPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderStyle: {
    width: "100%",
    height: hp("5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor:Background
  },
});
