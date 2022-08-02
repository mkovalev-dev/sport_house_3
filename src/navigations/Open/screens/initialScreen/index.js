import { Button, Heading, Image, Text, View } from "native-base";
import AnimatedBackground from "../../../../components/AnimatedBackground";
import { ButtonGroup, LogoHeaderGroup } from "./style";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

export default function InitialScreen() {
  const navigation = useNavigation();
  return (
    <AnimatedBackground>
      <Animatable.View animation="slideOutUp">
        <View style={LogoHeaderGroup.container}>
          <Image
            source={require("../../../../resources/img/logo.png")}
            alt="logotype"
          />
          <Heading style={LogoHeaderGroup.heading}>Добро пожаловать!</Heading>
          <Text style={LogoHeaderGroup.description}>
            Лучшая спортивная автоматизированная экосистема.
          </Text>
        </View>
      </Animatable.View>
      <View style={ButtonGroup.container}>
        <Button
          style={ButtonGroup.buttonSignIn}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          У меня есть аккаунт
        </Button>
        <Button
          style={ButtonGroup.buttonSignUp}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          Регистрация
        </Button>
      </View>
    </AnimatedBackground>
  );
}
