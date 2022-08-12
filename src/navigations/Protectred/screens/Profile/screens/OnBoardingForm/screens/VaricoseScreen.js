import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function VaricoseScreen({ ...props }) {
  const [varicose, setVaricose] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Epilepsy"}
      route={props.route}
      headTitle={"Имеется ли варикозное расширение вен?"}
      imgSrc={require("../../../../../../../resources/img/varicose.png")}
      field={props.route.params.field}
      fetchData={{ varicose: varicose }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={varicose}
        size="lg"
        onValueChange={(value) => setVaricose(value)}
      />
    </StepComponent>
  );
}
