import { ImageBackground, StyleSheet } from "react-native";
import { StatusBar, View } from "native-base";

export default function AnimatedBackground({ children }) {
  return (
    <View style={stylesAnimatedBackground.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../resources/img/bg_animated.gif")}
        resizeMode="cover"
        style={stylesAnimatedBackground.imageBg}
      >
        <View style={stylesAnimatedBackground.darkFilter} />
        {children}
      </ImageBackground>
    </View>
  );
}

const stylesAnimatedBackground = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    justifyContent: "center",
  },
  darkFilter: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.8)",
    width: "100%",
    height: "100%",
  },
});
