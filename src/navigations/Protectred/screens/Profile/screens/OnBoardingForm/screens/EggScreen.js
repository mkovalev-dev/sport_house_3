import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function EggScreen({ ...props }) {
  const [egg, setEgg] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Citrus"}
      route={props.route}
      headTitle={"Употребляете в пище яйца?"}
      imgSrc={require("../../../../../../../resources/img/egg.png")}
      field={props.route.params.field}
      fetchData={{ egg: egg }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={egg}
        size="lg"
        onValueChange={(value) => setEgg(value)}
      />
    </StepComponent>
  );
}
