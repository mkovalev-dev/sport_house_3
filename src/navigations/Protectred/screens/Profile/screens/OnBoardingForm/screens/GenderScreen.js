import { Modal } from "native-base";
import { DEFAULT_COLORS } from "../../../../../../../resources/styles/base/baseStyles";
import SwitchSelector from "react-native-switch-selector";
import React, { useState } from "react";
import StepComponent from "../components/StepComponent";

export default function GenderScreen({ ...props }) {
  const [gender, setGender] = useState(props.route.params.data);
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <StepComponent
        nextRoute={"Age"}
        route={props.route}
        headTitle={"Укажите Ваш пол"}
        imgSrc={require("../../../../../../../resources/img/gender.png")}
        field={props.route.params.field}
        fetchData={{ gender: gender }}
      >
        <SwitchSelector
          buttonColor={DEFAULT_COLORS.PRIMARY}
          options={[
            { label: "Мужской", value: "male" },
            { label: "Женский", value: "female" },
          ]}
          initial={gender === "male" ? 0 : gender === "female" ? 1 : -1}
          onPress={(value) => setGender(value)}
        />
      </StepComponent>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Внимание!</Modal.Header>
          <Modal.Body>
            Для более точного рассчета требуется указать корректные данные о
            себе!
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
}
