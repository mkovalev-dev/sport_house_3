import { View } from "native-base";
import { TabProfileScreen } from "./style";
import HeaderProfileInfo from "./components/HeaderProfileInfo/HeaderProfileInfo";
import HeaderActionMenu from "./components/HeaderActionMenu/HeaderActionMenu";
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
        <HeaderActionMenu />
      </View>
    </View>
  );
}
