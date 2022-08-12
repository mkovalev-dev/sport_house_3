import { Switch } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function MyopiaScreen({ ...props }) {
  const [myopia, setMyopia] = useState(
    props.route.params.data ? props.route.params.data : false
  );

  return (
    <StepComponent
      nextRoute={"Breath"}
      route={props.route}
      headTitle={"Имеется ли признаки близорукости?"}
      imgSrc={require("../../../../../../../resources/img/myopia.png")}
      field={props.route.params.field}
      fetchData={{ myopia: myopia }}
    >
      <Switch
        colorScheme="green"
        defaultIsChecked={myopia}
        size="lg"
        onValueChange={(value) => setMyopia(value)}
      />
    </StepComponent>
  );
}
