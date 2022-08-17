import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../../../../resources/styles/base/baseStyles";
import { Button, Heading, View } from "native-base";
import React from "react";
import FormEditInfo from "./FormEditInfo";
import { useDispatch } from "react-redux";
import { LogoutApiRequest } from "../../../../../../../api/redux/slices/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function InfoEditHeader() {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(LogoutApiRequest())
      .then(unwrapResult)
      .then(async () => {
        await AsyncStorage.removeItem("token");
      })
      .catch((err) => {
        Alert.alert("Не удалось выйти из системы!");
      });
  };
  return (
    <View
      style={{
        width: "100%",
        height: "65%",
        padding: DEFAULT_STYLE_PARAMS.padding,
      }}
    >
      <Heading size="md" textAlign="center" color={DEFAULT_COLORS.WHITE}>
        Редктировать профиль
      </Heading>
      <FormEditInfo />
      <Button
        variant={"ghost"}
        mt={4}
        colorScheme={"gray"}
        onPress={logoutUser}
      >
        Выйти из системы
      </Button>
    </View>
  );
}
