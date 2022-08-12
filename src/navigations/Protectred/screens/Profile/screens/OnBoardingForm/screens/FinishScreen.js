import { Button, Heading, Image, StatusBar, Text, View } from "native-base";
import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../../../../resources/styles/base/baseStyles";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { StartCalcRecApiRequest } from "../../../../../../../api/redux/slices/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

export default function FinishScreen({ ...props }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(StartCalcRecApiRequest())
      .then(unwrapResult)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={{ height: 200, width: 200 }}
        source={require("../../../../../../../resources/img/success.png")}
        alt={"meat"}
      />
      <Heading
        style={{
          marginTop: 45,
          marginBottom: 10,
          textAlign: "center",
          color: "#5bbc61",
        }}
      >
        Запрос успешно отправлен!
      </Heading>
      <Text textAlign={"center"} color={"gray.500"}>
        Нам потребуется несколько минут, чтобы рассчитать ваши рекомендации. По
        окночании рассчета Вам поступит уведомление!
      </Text>
      <Button
        style={{
          marginTop: 45,
          height: 55,
          width: "100%",
          backgroundColor: DEFAULT_COLORS.PRIMARY,
        }}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        В профиль
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: DEFAULT_STYLE_PARAMS.padding,
  },
});
