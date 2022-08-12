import { DEFAULT_STYLE_PARAMS } from "../../../../../../../resources/styles/base/baseStyles";
import { HStack, IconButton, Text } from "native-base";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TitleAction() {
  const navigation = useNavigation();
  return (
    <HStack
      alignItems="center"
      style={{
        position: "absolute",
        top: 45,
        width: "100%",
        paddingLeft: DEFAULT_STYLE_PARAMS.paddingLeft,
        paddingRight: DEFAULT_STYLE_PARAMS.paddingRight,
      }}
    >
      <Text italic color="white" fontSize={18}>
        Sport House
      </Text>
      <Spacer />
      <IconButton
        colorScheme="coolGray"
        variant={"ghost"}
        _icon={{
          as: AntDesign,
          name: "notification",
          color: "#ffffff",
        }}
      />
      <IconButton
        colorScheme="coolGray"
        variant={"ghost"}
        _icon={{
          as: AntDesign,
          name: "setting",
          color: "#ffffff",
        }}
        onPress={() => {
          navigation.navigate("Settings");
        }}
      />
    </HStack>
  );
}
