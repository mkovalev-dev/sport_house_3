import { Text, View } from "native-base";
import { DEFAULT_COLORS } from "../../../../../../../resources/styles/base/baseStyles";
import RNListSlider from "react-native-list-slider";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function HeightScreen({ ...props }) {
  const [height, setHeight] = useState(
    props.route.params.data ? props.route.params.data : 160
  );

  return (
    <StepComponent
      nextRoute={"PhysicalTraining"}
      route={props.route}
      headTitle={"Укажите Ваш рост"}
      imgSrc={require("../../../../../../../resources/img/001-height.png")}
      field={props.route.params.field}
      fetchData={{ height: height }}
    >
      <View style={{ marginTop: 45, marginBottom: 15 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            color: DEFAULT_COLORS.PRIMARY,
          }}
        >
          {height} СМ
        </Text>
      </View>
      <RNListSlider
        value={height}
        onValueChange={(value) => {
          setHeight(value);
        }}
      />
    </StepComponent>
  );
}
