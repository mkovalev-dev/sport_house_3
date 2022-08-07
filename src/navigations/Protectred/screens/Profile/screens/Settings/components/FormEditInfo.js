import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  Text,
  WarningOutlineIcon,
} from "native-base";
import { useToast } from "native-base";
import { DEFAULT_COLORS } from "../../../../../../../resources/styles/base/baseStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  UpdateUserInfoApiRequest,
  UserShortInfoData,
} from "../../../../../../../api/redux/slices/userSlice";
import { useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";

export default function FormEditInfo() {
  const stateShortUserData = useSelector(UserShortInfoData);
  const [firstName, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  const updateDataFetch = () => {
    dispatch(
      UpdateUserInfoApiRequest({ first_name: firstName, last_name: last_name })
    )
      .then(unwrapResult)
      .then((res) => {
        toast.show({
          description: "Успешно сохранено!",
          placement: "top",
        });
      });
  };

  return (
    <Box alignItems="center" style={{ marginTop: 20 }}>
      <Box style={{ width: "100%" }}>
        <FormControl style={{ marginTop: 5, marginBottom: 5 }}>
          <FormControl.Label>
            <Text style={{ color: DEFAULT_COLORS.WHITE }}>Имя</Text>
          </FormControl.Label>
          <Input
            type="text"
            defaultValue={stateShortUserData.first_name}
            placeholder="..."
            style={{ height: 45, color: "#fff" }}
            onChangeText={setFirstName}
          />
        </FormControl>
        <FormControl style={{ marginTop: 5, marginBottom: 5 }}>
          <FormControl.Label>
            <Text style={{ color: DEFAULT_COLORS.WHITE }}>Фамилия</Text>
          </FormControl.Label>
          <Input
            type="text"
            defaultValue={stateShortUserData.last_name}
            placeholder="..."
            style={{ height: 45, color: "#fff" }}
            onChangeText={setLastName}
          />
        </FormControl>
        <FormControl style={{ marginTop: 25, marginBottom: 5 }}>
          <Button
            style={{
              height: 45,
              color: "#fff",
              backgroundColor: DEFAULT_COLORS.PRIMARY,
            }}
            onPress={updateDataFetch}
          >
            Сохранить
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}
