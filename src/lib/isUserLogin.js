import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isLoginParam } from "../api/redux/slices/userSlice";

export default function useAsyncHookLogin() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const stateIsLoginParam = useSelector(isLoginParam);
  useEffect(() => {
    async function getResult() {
      setIsLoading(true);
      let token = await AsyncStorage.getItem("token");
      if (token) {
        setIsLogin(true);
        setIsLoading(false);
      } else {
        setIsLogin(false);
        setIsLoading(false);
      }
    }
    getResult();
  }, [stateIsLoginParam]);

  return { isLogin, isLoading };
}
