import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
//Local
import { gray, lightGray, primary } from "../Common/colors";
import Home from "../Screens/AppScreen/Home/Home";
import Profile from "../Screens/AppScreen/Profile/Profile";
import Setting from "../Screens/AppScreen/Profile/setting";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tab_Navigator(params) {
  return (
    <Tab.Navigator
      initialRouteName="Walls"
      backBehavior
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "below-icon",
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: lightGray,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          marginBottom: hp("1%"),
          marginTop: hp("1%"),
          //   fontFamily: "SemiBold",
          fontSize: hp("2%"),
        },
        tabBarStyle: {
          width: "100%",
          height: hp("10%"),
          // borderTopRightRadius:8,
          // borderTopLeftRadius:8,
          backgroundColor: gray,
          // shadowColor:'#273253',
          // shadowOffset:{width:0 , height: -3},
          // shadowRadius:23,
          // elevation:23,
          // borderTopColor:"#0C1326"
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home_Tab}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather
                name="grid"
                size={hp("4%")}
                color={primary}
                style={{ marginBottom: hp("-2%") }}
              />
            ) : (
              <Feather
                name="grid"
                size={hp("4%")}
                color={lightGray}
                style={{ marginBottom: hp("-2%") }}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile_Tab}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="person-circle"
                size={hp("4%")}
                color={primary}
                style={{ marginBottom: hp("-2%") }}
              />
            ) : (
              <Ionicons
                name="person-circle"
                size={hp("4%")}
                color={lightGray}
                style={{ marginBottom: hp("-2%") }}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

function Home_Tab(params) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home_Tab" component={Home} />
    </Stack.Navigator>
  );
}

function Profile_Tab(params) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile_Tab" component={Profile} />
      <Stack.Screen name="Setting_Tab" component={Setting} />
    </Stack.Navigator>
  );
}

function AppRoutes(params) {
  return (
    <Stack.Navigator
      initialRouteName="Tab_Navigator"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tab_Navigator" component={Tab_Navigator} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
