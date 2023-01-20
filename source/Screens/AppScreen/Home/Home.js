import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
//Local
import Container from "../../../Common/Container";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { ParagraphTxt } from "../../../Common/CustomTxt";

export default function Home() {
  return (
    <Container>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <AntDesign
          name="home"
          size={heightPercentageToDP("6%")}
          color="white"
        />
        <ParagraphTxt Paragraph={"Home Page is in progress"} />
      </View>
    </Container>
  );
}
