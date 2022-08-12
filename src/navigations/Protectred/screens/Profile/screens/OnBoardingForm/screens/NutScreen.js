import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function NutScreen({ ...props }) {
  const [nut, setNut] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Honey"}
      route={props.route}
      headTitle={"Имеется ли аллергия на орехи?"}
      imgSrc={require("../../../../../../../resources/img/nut.png")}
      field={props.route.params.field}
      fetchData={{ allergy_nut: nut }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={nut}
        size="lg"
        onValueChange={(value) => setNut(value)}
      />
    </StepComponent>
  );
}
