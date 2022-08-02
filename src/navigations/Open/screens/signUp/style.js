import { StyleSheet } from "react-native";
import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../resources/styles/base/baseStyles";

export const LogoHeadingTitle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  heading: { color: DEFAULT_COLORS.WHITE, marginTop: 10 },
});

export const FormStepper = StyleSheet.create({
  container: {
    paddingLeft: DEFAULT_STYLE_PARAMS.paddingLeft,
    paddingRight: DEFAULT_STYLE_PARAMS.paddingRight,
  },
});
