import React, { useState } from "react";
import DatePicker from "@dietime/react-native-date-picker";
import StepComponent from "../components/StepComponent";
import moment from "moment";

export default function AgeScreen({ ...props }) {
  const [age, setAge] = useState();

  return (
    <StepComponent
      nextRoute={"Weight"}
      route={props.route}
      headTitle={"Укажите Ваш возраст"}
      imgSrc={require("../../../../../../../resources/img/age-group.png")}
      field={props.route.params.field}
      fetchData={{ age: moment().diff(age, "years", false) }}
    >
      <DatePicker value={age} onChange={(value) => setAge(value)} />
    </StepComponent>
  );
}
