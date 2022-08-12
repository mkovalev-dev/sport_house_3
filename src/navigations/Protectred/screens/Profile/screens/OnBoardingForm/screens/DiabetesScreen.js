import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function DiabetesScreen({ ...props }) {
  const [diabetes, setDiabetes] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Health"}
      route={props.route}
      headTitle={"Имеются ли заболевания диабетом?"}
      imgSrc={require("../../../../../../../resources/img/diabetes.png")}
      field={props.route.params.field}
      fetchData={{ diabetes: diabetes }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={diabetes}
        size="lg"
        onValueChange={(value) => setDiabetes(value)}
      />
    </StepComponent>
  );
}
