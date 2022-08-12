import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function MeatScreen({ ...props }) {
  const [meat, setMeat] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Fish"}
      route={props.route}
      headTitle={"Употребляете в пище мясо?"}
      imgSrc={require("../../../../../../../resources/img/meat.png")}
      field={props.route.params.field}
      fetchData={{ meat: meat }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={meat}
        size="lg"
        onValueChange={(value) => setMeat(value)}
      />
    </StepComponent>
  );
}
