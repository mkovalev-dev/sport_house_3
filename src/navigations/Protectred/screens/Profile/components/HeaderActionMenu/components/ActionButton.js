import { Box, HStack, Icon, Pressable, Text } from "native-base";
import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../../../../resources/styles/base/baseStyles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ActionButton({
  title,
  navigateTo,
  iconName,
  styleType = "solid",
}) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    >
      <Box
        borderRadius={20}
        style={
          styleType === "border"
            ? styles.containerBorder
            : styles.containerSolid
        }
      >
        <HStack alignItems={"center"} space={4}>
          <Icon
            as={AntDesign}
            name={iconName}
            style={
              styleType === "border" ? styles.textBorder : styles.textSolid
            }
            size={5}
          />
          <Text
            style={
              styleType === "border" ? styles.textBorder : styles.textSolid
            }
          >
            {title}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerSolid: {
    width: "100%",
    paddingLeft: DEFAULT_STYLE_PARAMS.paddingLeft,
    paddingRight: DEFAULT_STYLE_PARAMS.paddingRight,
    backgroundColor: DEFAULT_COLORS.DARK_GRAY,
    height: 57.5,
    justifyContent: "center",
    // alignItems: "center",
  },
  textSolid: { color: "white" },

  containerBorder: {
    width: "100%",
    paddingLeft: DEFAULT_STYLE_PARAMS.paddingLeft,
    paddingRight: DEFAULT_STYLE_PARAMS.paddingRight,
    borderWidth: 1,
    borderColor: DEFAULT_COLORS.DARK_GRAY,
    height: 57.5,
    justifyContent: "center",
    // alignItems: "center",
  },
  textBorder: {
    color: DEFAULT_COLORS.DARK_GRAY,
  },
});
