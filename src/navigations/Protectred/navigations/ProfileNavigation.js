import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../screens/Profile";
import Settings from "../screens/Profile/screens/Settings";

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
    </ProfileStack.Navigator>
  );
}
