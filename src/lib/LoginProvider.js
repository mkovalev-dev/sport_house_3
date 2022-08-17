import TabBarNavigation from "../navigations/Protectred/TabBarNavigation";
import OpenScreenNavigate from "../navigations/Open/OpenScreenNavigate";
import * as React from "react";
import useAsyncHookLogin from "./isUserLogin";
import { Image, View } from "native-base";
import AnimatedBackground from "../components/AnimatedBackground";

export default function LoginProvider() {
  const { isLogin, isLoading } = useAsyncHookLogin();
  if (isLoading) {
    return (
      <AnimatedBackground>
        <View justifyContent={"center"} alignItems={"center"}>
          <Image source={require("../resources/img/logo.png")} alt="logotype" />
        </View>
      </AnimatedBackground>
    );
  }
  return <>{isLogin ? <TabBarNavigation /> : <OpenScreenNavigate />}</>;
}
