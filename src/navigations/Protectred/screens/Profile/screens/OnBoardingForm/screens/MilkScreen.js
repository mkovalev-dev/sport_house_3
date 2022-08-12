import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function MilkScreen({ ...props }) {
  const [milk, setMilk] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Egg"}
      route={props.route}
      headTitle={"Употребляете в пище молочные продукты?"}
      imgSrc={require("../../../../../../../resources/img/milk.png")}
      field={props.route.params.field}
      fetchData={{ milk: milk }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={milk}
        size="lg"
        onValueChange={(value) => setMilk(value)}
      />
    </StepComponent>
  );
}
