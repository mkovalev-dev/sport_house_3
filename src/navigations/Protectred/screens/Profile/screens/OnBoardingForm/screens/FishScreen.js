import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function FishScreen({ ...props }) {
  const [fish, setFish] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Milk"}
      route={props.route}
      headTitle={"Употребляете в пище рыбу?"}
      imgSrc={require("../../../../../../../resources/img/fish.png")}
      field={props.route.params.field}
      fetchData={{ fish: fish }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={fish}
        size="lg"
        onValueChange={(value) => setFish(value)}
      />
    </StepComponent>
  );
}
