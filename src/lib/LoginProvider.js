import TabBarNavigation from "../navigations/Protectred/TabBarNavigation";
import OpenScreenNavigate from "../navigations/Open/OpenScreenNavigate";
import React from "react";
import { useEffect, useState } from "react";
import useAsyncHookLogin from "./isUserLogin";
import AnimatedSplash from "react-native-animated-splash-screen";

export default function LoginProvider() {
  const [isLoadingSplash, setIsLoadingSplash] = useState(false);
  const isLogin = useAsyncHookLogin();
  useEffect(() => {
    if (isLogin) {
      setTimeout(function () {
        setIsLoadingSplash(true);
      }, 2000);
    }
  }, [isLogin]);
  return (
    <>
      {isLogin ? (
        // <AnimatedSplash
        //   isLoaded={isLoadingSplash}
        //   logoImage={require("../../src/resources/img/logo.png")}
        //   backgroundColor={"#262626"}
        //   logoHeight={250}
        //   logoWidht={250}
        // >
        <TabBarNavigation />
      ) : (
        // </AnimatedSplash>
        <OpenScreenNavigate />
      )}
    </>
  );
}
