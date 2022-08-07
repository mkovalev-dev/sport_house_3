import {
  Actionsheet,
  Button,
  FormControl,
  Heading,
  Image,
  Input,
  View,
  WarningOutlineIcon,
} from "native-base";
import { useDisclose } from "native-base";
import AnimatedBackground from "../../../../components/AnimatedBackground";
import { Form, LogoHeadingTitle } from "./style";
import HeaderGoBack from "../../../../components/HeaderGoBack";
import * as Animatable from "react-native-animatable";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { LoginApiRequest } from "../../../../api/redux/slices/userSlice";

export default function SignIn() {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginInputError, setLoginInputError] = useState(false);
  const [passInputError, setPassInputError] = useState(false);
  const dispatch = useDispatch();

  const validateSignIn = () => {
    if (login.length === 0) {
      setLoginInputError(true);
    } else setLoginInputError(false);
    if (password.length === 0) {
      setPassInputError(true);
    } else {
      setPassInputError(false);
    }
    if (login.length > 0 && password.length > 0) {
      return true;
    }
    return false;
  };

  const submitLoginForm = () => {
    if (validateSignIn()) {
      dispatch(LoginApiRequest({ username: login, password: password }))
        .then(unwrapResult)
        .then(async (res) => {
          await AsyncStorage.setItem("token", res.token);
        })
        .catch((err) => {
          Alert.alert("Ошибка авторизации", err.non_field_errors[0], []);
        });
    }
  };
  return (
    <AnimatedBackground>
      <HeaderGoBack />
      <Animatable.View animation="slideInDown">
        <View style={LogoHeadingTitle.container}>
          <Image
            source={require("../../../../resources/img/logo.png")}
            alt="logotype"
          />
          <Heading style={LogoHeadingTitle.heading}>Авторизация</Heading>
        </View>
      </Animatable.View>
      <Animatable.View animation="slideInUp">
        <View style={Form.container}>
          <FormControl isInvalid={loginInputError} style={{ marginBottom: 10 }}>
            <Input
              style={Form.input}
              placeholder="Логин..."
              onChangeText={(text) => {
                setLogin(text);
              }}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Пожалуйста, введите Логин.
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isInvalid={passInputError} style={{ marginTop: 10 }}>
            <Input
              style={Form.input}
              placeholder="Пароль..."
              secureTextEntry={true}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Пожалуйста, введите Пароль.
            </FormControl.ErrorMessage>
          </FormControl>
          <Button style={Form.submitBtn} onPress={submitLoginForm}>
            Авторизоваться
          </Button>
          <Button onPress={onOpen} variant="ghost" colorScheme="gray">
            Забыли пароль?
          </Button>

          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
              <Heading size="md" style={{ marginBottom: 35 }}>
                Восстановление пароля
              </Heading>
              <FormControl
                isInvalid={false}
                style={{ marginTop: 10, paddingLeft: 25, paddingRight: 25 }}
              >
                <FormControl.Label>Введите Логин</FormControl.Label>
                <Input style={Form.input} placeholder="Логин..." />
                <Button style={Form.resetPassBtn}>Восстановить пароль</Button>
              </FormControl>
            </Actionsheet.Content>
          </Actionsheet>
        </View>
      </Animatable.View>
    </AnimatedBackground>
  );
}
