import { StyleSheet } from "react-native";
import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../../../../resources/styles/base/baseStyles";
import { useNavigation } from "@react-navigation/native";
import { Button, Heading, Image, StatusBar, View } from "native-base";
import HeadSteps from "../../../../../../../components/HeadSteps";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateRecUserInfoApiRequest } from "../../../../../../../api/redux/slices/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

export default function StepComponent({
  children,
  route,
  imgSrc,
  field,
  headTitle,
  nextRoute,
  fetchData,
}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HeadSteps
        step={route.params.step}
        maxStep={route.params.lastStep}
        title={route.params.title}
      />
      <Image style={{ height: 200, width: 200 }} source={imgSrc} alt={field} />
      <Heading style={{ marginTop: 45, marginBottom: 45, textAlign: "center" }}>
        {headTitle}
      </Heading>
      {children}
      <Button
        style={{
          marginTop: 45,
          height: 55,
          width: "100%",
          backgroundColor: DEFAULT_COLORS.PRIMARY,
        }}
        onPress={() => {
          dispatch(UpdateRecUserInfoApiRequest(fetchData))
            .then(unwrapResult)
            .then((res) => {
              navigation.navigate(nextRoute);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Далее
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
