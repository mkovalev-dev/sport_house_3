import { View } from "native-base";
import { TabProfileScreen } from "./style";
import HeaderProfileInfo from "./components/HeaderProfileInfo";
import HeaderRecommendation from "./components/HeaderRecommendation";
import HeaderActionMenu from "./components/HeaderActionMenu";
import LottieView from "lottie-react-native";
import React, { useRef } from "react";

export default function Profile() {
  const animation = useRef(null);
  return (
    <View style={TabProfileScreen.container}>
      <LottieView
        autoPlay
        ref={animation}
        source={require("../../../../../assets/background.json")}
      />
      <HeaderProfileInfo />
      <View style={TabProfileScreen.action_container}>
        <HeaderRecommendation />
        <HeaderActionMenu />
      </View>
    </View>
  );
}
