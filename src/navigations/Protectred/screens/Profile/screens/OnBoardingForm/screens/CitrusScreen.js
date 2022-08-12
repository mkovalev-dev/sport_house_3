import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function CitrusScreen({ ...props }) {
  const [citrus, setCitrus] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Nut"}
      route={props.route}
      headTitle={"Имеется ли аллергия на цитрусовые?"}
      imgSrc={require("../../../../../../../resources/img/citrus.png")}
      field={props.route.params.field}
      fetchData={{ allergy_citrus: citrus }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={citrus}
        size="lg"
        onValueChange={(value) => setCitrus(value)}
      />
    </StepComponent>
  );
}
