import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../resources/styles/base/baseStyles";
import React, { useEffect } from "react";
import ProfileNavigation from "./navigations/ProfileNavigation";
import { useDispatch } from "react-redux";
import { UpdateNotificationTokenApiRequest } from "../../api/redux/slices/userSlice";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Map from "./screens/Map";

const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function TabBarNavigation() {
  const dispatch = useDispatch();
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      dispatch(UpdateNotificationTokenApiRequest({ token: token }))
    );
  }, []);
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
            } else if (route.name === "Площадки") {
              iconName = "map";
            } else if (route.name === "Главная") {
              iconName = "home";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            height: 90,
            borderTopLeftRadius: DEFAULT_STYLE_PARAMS.borderRadius,
            borderTopRightRadius: DEFAULT_STYLE_PARAMS.borderRadius,
            paddingHorizontal: 5,
            paddingTop: 20,
            backgroundColor: DEFAULT_COLORS.DARK_GRAY,
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: DEFAULT_COLORS.PRIMARY,
          tabBarInactiveTintColor: DEFAULT_COLORS.WHITE,
        })}
      >
        {/*<Tab.Screen*/}
        {/*  name="Главная"*/}
        {/*  component={() => {*/}
        {/*    return <></>;*/}
        {/*  }}*/}
        {/*/>*/}
        <Tab.Screen name="Площадки" component={Map} />
        <Tab.Screen name="Профиль" component={ProfileNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
  }
  return token;
}
