import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import Settings from "../screens/Profile/screens/Settings";
import OnBoardingFormNavigator from "../screens/Profile/screens/OnBoardingForm";
import MyRecommendation from "../screens/Profile/screens/MyRecommendation";
import MyCalendar from "../screens/Profile/screens/MyCalendar";

const ProfileStack = createNativeStackNavigator();
export default function ProfileNavigation() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="Recommendation"
        component={OnBoardingFormNavigator}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="MyRecommendation"
        component={MyRecommendation}
        options={{
          headerShown: true,
          title: "Мои рекомендации",
          headerBackTitleVisible: false,
        }}
      />
      <ProfileStack.Screen
        name="MyCalendar"
        component={MyCalendar}
        options={{
          headerShown: true,
          title: "Мой календарь",
          headerBackTitleVisible: false,
        }}
      />
    </ProfileStack.Navigator>
  );
}
