import { Heading, Image, Text, View } from "native-base";
import HeaderGoBack from "../../../../../../components/HeaderGoBack";
import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../../../resources/styles/base/baseStyles";
import LottieView from "lottie-react-native";
import React from "react";
import { useRef } from "react";
import PhotoEditHeader from "./components/PhotoEditHeader";
import InfoEditHeader from "./components/InfoEditHeader";

export default function Settings({ navigation }) {
  const animation = useRef(null);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: DEFAULT_COLORS.DARK_GRAY,
      }}
    >
      <LottieView
        autoPlay
        ref={animation}
        source={require("../../../../../../../assets/background.json")}
      />
      <PhotoEditHeader />
      <InfoEditHeader />
    </View>
  );
}
