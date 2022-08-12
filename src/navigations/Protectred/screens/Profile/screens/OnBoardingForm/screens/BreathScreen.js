import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function BreathScreen({ ...props }) {
  const [breath, setBreath] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Digestion"}
      route={props.route}
      headTitle={"Имеются ли заболевания органов дыхания?"}
      imgSrc={require("../../../../../../../resources/img/breath.png")}
      field={props.route.params.field}
      fetchData={{ breath: breath }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={breath}
        size="lg"
        onValueChange={(value) => setBreath(value)}
      />
    </StepComponent>
  );
}
