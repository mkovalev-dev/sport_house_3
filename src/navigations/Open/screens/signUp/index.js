import {
  Alert,
  Button,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
  View,
  WarningOutlineIcon,
} from "native-base";
import HeaderGoBack from "../../../../components/HeaderGoBack";
import AnimatedBackground from "../../../../components/AnimatedBackground";
import { FormStepper, LogoHeadingTitle } from "./style";
import { useState } from "react";
import { Form } from "../signIn/style";
import * as Animatable from "react-native-animatable";

export default function SignUp() {
  return (
    <AnimatedBackground>
      <HeaderGoBack />
      <Animatable.View animation="slideInDown">
        <View style={LogoHeadingTitle.container}>
          <Image
            source={require("../../../../resources/img/logo.png")}
            alt="logotype"
          />
          <Heading style={LogoHeadingTitle.heading}>Регистрация</Heading>
        </View>
      </Animatable.View>
      <Animatable.View animation="slideInUp">
        <View style={FormStepper.container}>
          <FormControl isInvalid={false} style={{ marginBottom: 10 }}>
            <Input style={Form.input} placeholder="Email..." />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Пожалуйста, введите Email.
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isInvalid={false} style={{ marginBottom: 10 }}>
            <Input style={Form.input} placeholder="Фамилия..." />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Пожалуйста, введите Фамилию.
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isInvalid={false} style={{ marginBottom: 10 }}>
            <Input style={Form.input} placeholder="Имя..." />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Пожалуйста, введите Имя.
            </FormControl.ErrorMessage>
          </FormControl>
          <Button style={Form.submitBtn}>Зарегистрироваться</Button>
        </View>
      </Animatable.View>
    </AnimatedBackground>
  );
}
