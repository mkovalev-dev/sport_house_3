import React from "react";
import { AlertDialog, Button, Icon, useToast } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StartCalcRecApiRequest } from "../../../../../../../api/redux/slices/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export default function AlertRefreshRec({ isOpen, setIsOpen }) {
  const onClose = () => {
    setIsOpen(false);
  };

  const cancelRef = React.useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Обновление рекоменации</AlertDialog.Header>
        <AlertDialog.Body>
          Хотели бы обновить свои данные для расчета?
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={() => {
                dispatch(StartCalcRecApiRequest())
                  .then(unwrapResult)
                  .then((res) => {
                    setIsOpen(false);
                    toast.show({
                      description:
                        "Обновление успешно запущено, ожидайте уведомления!",
                      placement: "top",
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                    toast.show({
                      description: "Произошла ошибка!",
                      placement: "top",
                    });
                    setIsOpen(false);
                  });
              }}
              ref={cancelRef}
            >
              Нет
            </Button>
            <Button
              colorScheme="success"
              onPress={() => {
                setIsOpen(false);
                navigation.navigate("Recommendation");
              }}
              leftIcon={<Icon as={Ionicons} name="refresh" size="sm" />}
            >
              Обновить
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
}
