import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { isLoginParam } from "../api/redux/slices/userSlice";

export default function useAsyncHookLogin() {
  const [result, setResult] = useState(false);
  const stateIsLoginParam = useSelector(isLoginParam);
  useEffect(() => {
    async function getResult() {
      let token = await AsyncStorage.getItem("token");
      if (token) {
        setResult(true);
      } else {
        setResult(false);
      }
    }
    getResult();
  }, [stateIsLoginParam]);

  return result;
}
