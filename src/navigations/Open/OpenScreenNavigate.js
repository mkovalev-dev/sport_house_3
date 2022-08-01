import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitialScreen from "./screens/initialScreen/index";

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
      </OpenStack.Navigator>
    </NavigationContainer>
  );
}
