import { Box, Pressable, Text } from "native-base";
import { DEFAULT_COLORS } from "../../../../../../../resources/styles/base/baseStyles";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default function ActionButton({
  title,
  navigateTo,
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
        <Text
          style={styleType === "border" ? styles.textBorder : styles.textSolid}
        >
          {title}
        </Text>
      </Box>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerSolid: {
    width: "100%",
    backgroundColor: DEFAULT_COLORS.DARK_GRAY,
    height: 57.5,
    justifyContent: "center",
    alignItems: "center",
  },
  textSolid: { width: 300, color: "white", textAlign: "center" },

  containerBorder: {
    width: "100%",
    borderWidth: 1,
    borderColor: DEFAULT_COLORS.DARK_GRAY,
    height: 57.5,
    justifyContent: "center",
    alignItems: "center",
  },
  textBorder: {
    width: 300,
    color: DEFAULT_COLORS.DARK_GRAY,
    textAlign: "center",
  },
});
