import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar, Text, View } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../resources/styles/base/baseStyles";
import Profile from "./screens/Profile";
import React from "react";
import ProfileNavigation from "./navigations/ProfileNavigation";

const Tab = createBottomTabNavigator();
export default function TabBarNavigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Tab.Navigator
        initialRouteName="Профиль"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Профиль") {
              iconName = "person";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            height: 90,
            borderRadius: DEFAULT_STYLE_PARAMS.borderRadius,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: DEFAULT_COLORS.LIGHT_GRAY,
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: DEFAULT_COLORS.PRIMARY,
          tabBarInactiveTintColor: DEFAULT_COLORS.WHITE,
        })}
      >
        <Tab.Screen name="Профиль" component={ProfileNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
