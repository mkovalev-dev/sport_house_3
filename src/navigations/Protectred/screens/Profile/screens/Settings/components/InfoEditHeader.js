import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../../../../resources/styles/base/baseStyles";
import { Heading, View } from "native-base";
import React from "react";
import FormEditInfo from "./FormEditInfo";

export default function InfoEditHeader() {
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
    </View>
  );
}
