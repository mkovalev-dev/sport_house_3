import { Heading, Progress, View } from "native-base";
import { DEFAULT_COLORS } from "../resources/styles/base/baseStyles";
import React from "react";

export default function HeadSteps({ step, maxStep, title }) {
  return (
    <View style={{ position: "absolute", top: 60, width: "100%" }}>
      <Heading size={"sm"} style={{ textAlign: "center", marginBottom: 15 }}>
        {title} {step}/{maxStep}
      </Heading>
      <Progress
        bg="coolGray.100"
        _filledTrack={{
          bg: DEFAULT_COLORS.PRIMARY,
        }}
        value={step}
        max={maxStep}
        mx="4"
      />
    </View>
  );
}
