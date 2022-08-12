import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function DigestionScreen({ ...props }) {
  const [digestion, setDigestion] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Finish"}
      route={props.route}
      headTitle={"Имеются ли заболевания органов пищеварения?"}
      imgSrc={require("../../../../../../../resources/img/digestion.png")}
      field={props.route.params.field}
      fetchData={{ digestion: digestion }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={digestion}
        size="lg"
        onValueChange={(value) => setDigestion(value)}
      />
    </StepComponent>
  );
}
