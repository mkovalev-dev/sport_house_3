import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function HealthScreen({ ...props }) {
  const [health, setHealth] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Varicose"}
      route={props.route}
      headTitle={"Имеются ли заболевания сердечно-сосудистого аппарата?"}
      imgSrc={require("../../../../../../../resources/img/health.png")}
      field={props.route.params.field}
      fetchData={{ health: health }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={health}
        size="lg"
        onValueChange={(value) => setHealth(value)}
      />
    </StepComponent>
  );
}
