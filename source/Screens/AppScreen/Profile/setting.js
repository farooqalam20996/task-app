import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import Container from "../../../Common/Container";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Header } from "../../../Common/Custom_Header";
import { useNavigation } from "@react-navigation/native";
import { Advance_Button } from "../../../Common/Button";
import {
  gray,
  lightGray,
  primary,
  secondary,
  white,
} from "../../../Common/colors";

export default function Setting() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLocEnabled, setIsLocEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleLocSwitch = () =>
    setIsLocEnabled((previousState) => !previousState);

  return (
    <Container>
      <View style={styles.main}>
        <Header
          isBack={true}
          ifIcon={false}
          Heading={"Setting"}
          BackPress={() => navigation.goBack()}
        />
        <Advance_Button Title={"My account"} />
        <Advance_Button Title={"Language"} subTitle={"English"} />
        <Advance_Button Title={"Privacy"} />

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: hp("5%"),
          }}
        >
          <Text style={{ color: white, fontSize: hp("2.5%") }}>
            Notifications
          </Text>
          <Switch
            trackColor={{ false: lightGray, true: gray }}
            thumbColor={isEnabled ? white : primary}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: hp("5%"),
          }}
        >
          <Text style={{ color: white, fontSize: hp("2.5%") }}>Locations</Text>
          <Switch
            trackColor={{ false: lightGray, true: gray }}
            thumbColor={isLocEnabled ? white : primary}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleLocSwitch}
            value={isLocEnabled}
          />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0.3,
    padding: hp("1.5%"),
    paddingTop: hp("3%"),
    alignItems: "center",
  },
});
