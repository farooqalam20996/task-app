import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Introduction from "../Screens/AuthScreens/Introduction";
import AppRoutes from "./AppRoutes";
import Profile from "../Screens/AppScreen/Profile/Profile";
import Setting from "../Screens/AppScreen/Profile/setting";
const Stack = createStackNavigator();

const AuthRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        Introduction={"Introduction"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Introduction" component={Introduction} />
        {/* <Stack.Screen name="AppRoutes" component={AppRoutes} /> */}
        <Stack.Screen name="Profile_Tab" component={Profile} />
        <Stack.Screen name="Setting_Tab" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoute;
