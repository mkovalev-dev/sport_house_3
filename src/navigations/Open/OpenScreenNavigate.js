import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitialScreen from "./screens/initialScreen/index";
import SignIn from "./screens/signIn";
import SignUp from "./screens/signUp";

const OpenStack = createNativeStackNavigator();

export default function OpenScreenNavigate() {
  return (
    <NavigationContainer>
      <OpenStack.Navigator initialRouteName="InitialPage">
        <OpenStack.Screen
          name="InitialPage"
          component={InitialScreen}
          options={{ headerShown: false }}
        />
        <OpenStack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <OpenStack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </OpenStack.Navigator>
    </NavigationContainer>
  );
}
