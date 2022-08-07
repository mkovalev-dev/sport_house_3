import { StyleSheet } from "react-native";
import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../resources/styles/base/baseStyles";

export const TabProfileScreen = StyleSheet.create({
  container: {
    backgroundColor: DEFAULT_COLORS.DARK_GRAY,
    height: "100%",
    color: "#fff",
  },
  action_container: {
    height: "65%",
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 35,
    borderRadius: 35,
    padding: DEFAULT_STYLE_PARAMS.padding,
  },
});
