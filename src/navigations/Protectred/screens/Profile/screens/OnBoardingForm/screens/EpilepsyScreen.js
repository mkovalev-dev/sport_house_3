import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function EpilepsyScreen({ ...props }) {
  const [epilepsy, setEpilepsy] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Myopia"}
      route={props.route}
      headTitle={"Имеется ли признаки эпилепсии?"}
      imgSrc={require("../../../../../../../resources/img/epilepsy.png")}
      field={props.route.params.field}
      fetchData={{ epilepsy: epilepsy }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={epilepsy}
        size="lg"
        onValueChange={(value) => setEpilepsy(value)}
      />
    </StepComponent>
  );
}
