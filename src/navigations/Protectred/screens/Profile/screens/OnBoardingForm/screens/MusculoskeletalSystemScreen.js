import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function MusculoskeletalSystemScreen({ ...props }) {
  const [musculoskeletalSystem, setMusculoskeletalSystem] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Diabetes"}
      route={props.route}
      headTitle={"Имеются ли заболевания опорно-двигательного аппарата?"}
      imgSrc={require("../../../../../../../resources/img/musculo.png")}
      field={props.route.params.field}
      fetchData={{ musculoskeletal_system: musculoskeletalSystem }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={musculoskeletalSystem}
        size="lg"
        onValueChange={(value) => setMusculoskeletalSystem(value)}
      />
    </StepComponent>
  );
}
