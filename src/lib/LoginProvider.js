import TabBarNavigation from "../navigations/Protectred/TabBarNavigation";
import OpenScreenNavigate from "../navigations/Open/OpenScreenNavigate";
import * as React from "react";
import useAsyncHookLogin from "./isUserLogin";

export default function LoginProvider() {
  const isLogin = useAsyncHookLogin();

  return <>{isLogin ? <TabBarNavigation /> : <OpenScreenNavigate />}</>;
}
