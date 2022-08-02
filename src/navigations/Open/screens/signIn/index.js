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

export default function SignIn() {
  const { isOpen, onOpen, onClose } = useDisclose();
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
          <FormControl isInvalid={false} style={{ marginBottom: 10 }}>
            <Input style={Form.input} placeholder="Логин..." />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Пожалуйста, введите Логин.
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isInvalid={false} style={{ marginTop: 10 }}>
            <Input
              style={Form.input}
              placeholder="Пароль..."
              secureTextEntry={true}
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Пожалуйста, введите Пароль.
            </FormControl.ErrorMessage>
          </FormControl>
          <Button style={Form.submitBtn}>Авторизоваться</Button>
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
