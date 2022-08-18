import { DEFAULT_STYLE_PARAMS } from "../../../../../../../resources/styles/base/baseStyles";
import { Badge, HStack, IconButton, Text } from "native-base";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { UserShortInfoData } from "../../../../../../../api/redux/slices/userSlice";

export default function TitleAction() {
  const navigation = useNavigation();
  const stateShortUserData = useSelector(UserShortInfoData);
  return (
    <HStack
      alignItems="center"
      style={{
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
      {stateShortUserData?.notification_badge && (
        <Badge // bg="red.400"
          colorScheme="danger"
          rounded="full"
          mb={6}
          mr={-4}
          zIndex={1}
          padding={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontSize: 6,
          }}
        ></Badge>
      )}
      <IconButton
        onPress={() => {
          navigation.navigate("Notification");
        }}
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
