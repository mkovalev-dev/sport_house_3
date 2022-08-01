import { StyleSheet } from "react-native";
import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../resources/styles/base/baseStyles";

export const LogoHeaderGroup = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: DEFAULT_STYLE_PARAMS.padding,
  },
  heading: {
    color: DEFAULT_COLORS.WHITE,
    marginTop: 10,
  },
  description: {
    color: DEFAULT_COLORS.WHITE,
    marginTop: 10,
    textAlign: "center",
  },
});

export const ButtonGroup = StyleSheet.create({
  container: {
    padding: DEFAULT_STYLE_PARAMS.padding,
    position: "absolute",
    bottom: DEFAULT_STYLE_PARAMS.paddingBottom,
    width: "100%",
  },
  buttonSignIn: {
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    backgroundColor: DEFAULT_COLORS.PRIMARY,
  },
  buttonSignUp: {
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    backgroundColor: null,
    borderColor: DEFAULT_COLORS.WHITE,
    borderWidth: 1,
  },
});
