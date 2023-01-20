import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { Header } from "../../../Common/Custom_Header";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AntDesign, Feather } from "@expo/vector-icons";
import Container from "../../../Common/Container";
import { dark_brown, gray, primary, red, white } from "../../../Common/colors";
import { HeadingTxt, ParagraphTxt } from "../../../Common/CustomTxt";
import { Button, Simple_Button } from "../../../Common/Button";
import WorkComp from "../../../Components/workComp";
import { useNavigation } from "@react-navigation/native";

const TextDecoration = ({ value, label }) => {
  return (
    <View>
      <ParagraphTxt
        Paragraph={value}
        otherStyle={{
          color: gray,
          alignSelf: "center",
          fontWeight: "bold",
          fontSize: hp("2%"),
        }}
      />
      <ParagraphTxt
        Paragraph={label}
        otherStyle={{ color: gray, alignSelf: "center", fontSize: hp("1.5%") }}
      />
    </View>
  );
};

const MediaComp = ({ social, Icon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      {Icon}
      <ParagraphTxt
        Paragraph={"@" + social}
        otherStyle={{
          color: gray,
          fontWeight: "bold",
          fontSize: hp("2%"),
        }}
      />
    </View>
  );
};

const workData = [
  {
    key: 0,
    image: require("../../../Images/pic1.jpg"),
    Label: "Nature",
    NoOfPhotos: "234",
  },
  {
    key: 1,
    image: require("../../../Images/pic2.jpg"),
    Label: "Art",
    NoOfPhotos: "566",
  },
  {
    key: 2,
    image: require("../../../Images/pic3.jpg"),
    Label: "Mountain",
    NoOfPhotos: "34",
  },
  {
    key: 3,
    image: require("../../../Images/pic4.jpg"),
    Label: "Galaxy",
    NoOfPhotos: "54",
  },
  {
    key: 4,
    image: require("../../../Images/pic5.jpg"),
    Label: "sports",
    NoOfPhotos: "34",
  },
  {
    key: 5,
    image: require("../../../Images/pic6.jpg"),
    Label: "New think",
    NoOfPhotos: "90",
  },
];

export default function Profile() {
  const navigation = useNavigation();
  return (
    <Container>
      <View style={styles.main}>
        <Header
          isBack={true}
          Icon={
            <AntDesign
              name="setting"
              size={hp("4%")}
              color="white"
              onPress={() => navigation.navigate("Setting_Tab")}
            />
          }
          ifIcon={true}
          Heading={"Profile"}
          BackPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={{
          backgroundColor: white,
          flex: 1,
          paddingTop: hp("4%"),
          paddingHorizontal: hp("0.5%"),
          // borderTopLeftRadius: hp("50%"),
          // borderTopRightRadius: hp("50%"),
        }}
      >
        <HeadingTxt
          Heading={"Caroline steele"}
          otherStyle={{
            color: red,
            fontSize: hp("3%"),
            alignSelf: "center",
          }}
        />
        <ParagraphTxt
          Paragraph={"Photographer and Artist"}
          otherStyle={{ color: gray, alignSelf: "center" }}
        />

        <ParagraphTxt
          Paragraph={
            "Hi! my name is Coral and I love photography! it's my greatest passion in my life"
          }
          otherStyle={{
            color: gray,
            alignSelf: "center",
            width: "85%",
            marginTop: hp("2%"),
            textAlign: "center",
          }}
        />
        <View
          style={{
            width: "75%",
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: hp("2%"),
          }}
        >
          <Simple_Button
            Title={"FOLLOW"}
            mainStyle={{
              backgroundColor: red,
              width: hp("15%"),
              borderRadius: hp("3%"),
              elevation: 7,
            }}
            TitleStyle={{
              color: white,
              fontSize: hp("2%"),
              fontWeight: "bold",
            }}
          />
          <Simple_Button
            Title={"MESSAGE"}
            mainStyle={{
              backgroundColor: white,
              borderColor: red,
              borderWidth: hp("0.5%"),
              width: hp("15%"),
              borderRadius: hp("3%"),
              elevation: 7,
            }}
            TitleStyle={{
              color: red,
              fontSize: hp("2%"),
              fontWeight: "bold",
            }}
          />
        </View>
        <View
          style={{
            width: "75%",
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: hp("2%"),
          }}
        >
          <TextDecoration label={"PHOTOS"} value={"674"} />
          <TextDecoration label={"FOLLOWERS"} value={"15k"} />
          <TextDecoration label={"FOLLOWING"} value={"23k"} />
        </View>
        <View style={{ paddingTop: hp("1%") }}>
          <HeadingTxt
            Heading={"My works"}
            otherStyle={{
              color: red,
              fontSize: hp("2%"),
              alignSelf: "flex-start",
              marginVertical: hp("2%"),
            }}
          />
          <FlatList
            data={workData}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <WorkComp
                  backImage={item.image}
                  NoOfPhotos={item.NoOfPhotos}
                  label={item.Label}
                />
              );
            }}
          />
        </View>

        <View style={{ paddingTop: hp("1%") }}>
          <HeadingTxt
            Heading={"social media"}
            otherStyle={{
              color: red,
              fontSize: hp("2%"),
              alignSelf: "flex-start",
              marginVertical: hp("2%"),
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              //   alignSelf:'flex-start'
            }}
          >
            <MediaComp
              social={"CarolArt"}
              Icon={
                <AntDesign name="instagram" size={hp("2.5%")} color={gray} />
              }
            />
            <MediaComp
              social={"CarolArt"}
              Icon={<Feather name="twitter" size={hp("2.5%")} color={gray} />}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: hp("2%"),
            }}
          >
            <MediaComp
              social={"CarolArt"}
              Icon={<Feather name="facebook" size={hp("2.5%")} color={gray} />}
            />
            <MediaComp
              social={"CarolArt"}
              Icon={<Feather name="linkedin" size={hp("2.5%")} color={gray} />}
            />
          </View>
        </View>
      </View>
      <Image
        source={require("../../../Images/profile1.jpg")}
        style={styles.profileStyle}
      />
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
  profileStyle: {
    position: "absolute",
    width: hp("15%"),
    height: hp("15%"),
    borderRadius: 100,
    elevation: 5,
    alignSelf: "center",
    top: hp("15%"),
  },
});
