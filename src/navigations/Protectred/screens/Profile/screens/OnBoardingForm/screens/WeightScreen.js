import { Text, View } from "native-base";
import { DEFAULT_COLORS } from "../../../../../../../resources/styles/base/baseStyles";
import RNListSlider from "react-native-list-slider";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function WeightScreen({ ...props }) {
  const [weight, setWeight] = useState(
    props.route.params.data ? props.route.params.data : 50
  );
  return (
    <StepComponent
      nextRoute={"Height"}
      route={props.route}
      headTitle={"Укажите Ваш вес"}
      imgSrc={require("../../../../../../../resources/img/002-body-scale.png")}
      field={props.route.params.field}
      fetchData={{ weight: weight }}
    >
      <View style={{ marginTop: 45, marginBottom: 15 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            color: DEFAULT_COLORS.PRIMARY,
          }}
        >
          {weight} КГ
        </Text>
      </View>
      <RNListSlider
        value={weight}
        onValueChange={(value) => {
          setWeight(value);
        }}
      />
    </StepComponent>
  );
}
