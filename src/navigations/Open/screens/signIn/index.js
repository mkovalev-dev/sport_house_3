import {
  Actionsheet,
  ArrowBackIcon,
  ArrowForwardIcon,
  Box,
  Button,
  ChevronLeftIcon,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
  View,
  WarningOutlineIcon,
} from "native-base";
import { useDisclose } from "native-base";
import AnimatedBackground from "../../../../components/AnimatedBackground";
import { DEFAULT_STYLE_PARAMS } from "../../../../resources/styles/base/baseStyles";
import { Form, HeaderMenu, LogoHeadingTitle } from "./style";
import { useNavigation } from "@react-navigation/native";
import { ButtonGroup } from "../initialScreen/style";

export default function SignIn() {
  const navigation = useNavigation();
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <AnimatedBackground>
      <View style={HeaderMenu.container}>
        <Button
          variant="ghost"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ChevronLeftIcon style={{ color: "#fff" }} size="md" />
        </Button>
      </View>
      <View style={LogoHeadingTitle.container}>
        <Image
          source={require("../../../../resources/img/logo.png")}
          alt="logotype"
        />
        <Heading style={LogoHeadingTitle.heading}>Авторизация</Heading>
      </View>
      <View style={Form.container}>
        <FormControl isInvalid={false} style={{ marginBottom: 10 }}>
          <Input style={Form.input} placeholder="Логин..." />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Пожалуйста, введите Логин.
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={false} style={{ marginTop: 10 }}>
          <Input
            style={Form.input}
            placeholder="Пароль..."
            secureTextEntry={true}
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
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
            <FormControl isInvalid={false} style={{ marginTop: 10 }}>
              <FormControl.Label>Введите Логин</FormControl.Label>
              <Input style={Form.input} placeholder="Логин..." />
            </FormControl>
            <Button style={Form.submitBtn}>Восстановить пароль</Button>
          </Actionsheet.Content>
        </Actionsheet>
      </View>
    </AnimatedBackground>
  );
}
