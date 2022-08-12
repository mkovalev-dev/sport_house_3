import { CheckIcon, Select } from "native-base";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function PhysicalTrainingScreen({ ...props }) {
  const [physicalTraining, setPhysicalTraining] = useState(
    props.route.params.data ? props.route.params.data : "Средний"
  );

  return (
    <StepComponent
      nextRoute={"Meat"}
      route={props.route}
      headTitle={"Укажите Вашу физическую подготовку"}
      imgSrc={require("../../../../../../../resources/img/physical_traning.png")}
      field={props.route.params.field}
      fetchData={{ physical_training: physicalTraining }}
    >
      <Select
        selectedValue={physicalTraining}
        minWidth="100%"
        height="60"
        placeholder="..."
        _selectedItem={{
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={(itemValue) => setPhysicalTraining(itemValue)}
      >
        <Select.Item label="Минимальный" value="Минимальный" />
        <Select.Item label="Слабый" value="Слабый" />
        <Select.Item label="Средний" value="Средний" />
        <Select.Item label="Высокий" value="Высокий" />
        <Select.Item label="Экстра" value="Экстра" />
      </Select>
    </StepComponent>
  );
}
