import { Button, Heading, Image, Text, View } from "native-base";
import AnimatedBackground from "../../../../components/AnimatedBackground";
import { ButtonGroup, LogoHeaderGroup } from "./style";

export default function InitialScreen() {
  return (
    <AnimatedBackground>
      <View style={LogoHeaderGroup.container}>
        <Image source={require("../../../../resources/img/logo.png")} />
        <Heading style={LogoHeaderGroup.heading}>Добро пожаловать!</Heading>
        <Text style={LogoHeaderGroup.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>
      <View style={ButtonGroup.container}>
        <Button style={ButtonGroup.buttonSignIn}>У меня есть аккаунт</Button>
        <Button style={ButtonGroup.buttonSignUp}>Регистрация</Button>
      </View>
    </AnimatedBackground>
  );
}
