import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function HoneyScreen({ ...props }) {
  const [honey, setHoney] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"MusculoskeletalSystem"}
      route={props.route}
      headTitle={"Имеется ли аллергия на мед?"}
      imgSrc={require("../../../../../../../resources/img/honey.png")}
      field={props.route.params.field}
      fetchData={{ allergy_honey: honey }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={honey}
        size="lg"
        onValueChange={(value) => setHoney(value)}
      />
    </StepComponent>
  );
}
