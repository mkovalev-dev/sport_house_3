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
import {RegistrationUserApiRequest} from "../../../../api/redux/slices/userSlice";

export default function SignUp() {
  const navigation = useNavigation();
  const [emailInputError, setEmailInputError] = useState(false);
  const [firstNameInputError, setFirstNameInputError] = useState(false);
  const [lastNameInputError, setLastNameInputError] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const validateSignUp = () => {
    if (email.length === 0) {
      setEmailInputError(true);
    } else setEmailInputError(false);
    if (firstName.length === 0) {
      setFirstNameInputError(true);
    } else {
      setFirstNameInputError(false);
    }
    if (lastName.length === 0) {
      setLastNameInputError(true);
    } else {
      setLastNameInputError(false);
    }
    return email.length > 0 && firstName.length > 0 && lastName.length > 0;

  };

  const submitRegistrationForm = () => {
    if (validateSignUp()) {
      dispatch(RegistrationUserApiRequest({ email: email, first_name: firstName, last_name:lastName }))
        .then(unwrapResult)
        .then(async (res) => {
          Alert.alert("Данные для входа направлены на вашу электронную почту");
          navigation.navigate("SignIn")
        })
        .catch((err) => {
          Alert.alert("Ошибка регистрации", err.error, []);
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
          <Heading style={LogoHeadingTitle.heading}>Регистрация</Heading>
        </View>
      </Animatable.View>
      <Animatable.View animation="slideInUp">
        <View style={FormStepper.container}>
          <FormControl isInvalid={emailInputError} style={{ marginBottom: 10 }}>
            <Input style={Form.input} placeholder="Email..." onChangeText={(text) => {
                setEmail(text);
              }}/>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Пожалуйста, введите Email.
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isInvalid={lastNameInputError} style={{ marginBottom: 10 }}>
            <Input style={Form.input} placeholder="Фамилия..." onChangeText={(text) => {
                setLastName(text);
              }}/>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Пожалуйста, введите Фамилию.
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isInvalid={firstNameInputError} style={{ marginBottom: 10 }}>
            <Input style={Form.input} placeholder="Имя..." onChangeText={(text) => {
                setFirstName(text);
              }}/>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Пожалуйста, введите Имя.
            </FormControl.ErrorMessage>
          </FormControl>
          <Button style={Form.submitBtn} onPress={submitRegistrationForm}>Зарегистрироваться</Button>
        </View>
      </Animatable.View>
    </AnimatedBackground>
  );
}
