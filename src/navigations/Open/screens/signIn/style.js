import { StyleSheet } from "react-native";
import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../resources/styles/base/baseStyles";

export const HeaderMenu = StyleSheet.create({
  container: {
    position: "absolute",
    top: DEFAULT_STYLE_PARAMS.paddingTop * 2,
    paddingLeft: DEFAULT_STYLE_PARAMS.paddingLeft / 2,
  },
});

export const LogoHeadingTitle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  heading: { color: DEFAULT_COLORS.WHITE, marginTop: 10 },
});

export const Form = StyleSheet.create({
  container: {
    padding: DEFAULT_STYLE_PARAMS.padding,
  },
  input: {
    height: 50,
    color: DEFAULT_COLORS.WHITE,
  },
  submitBtn: {
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    width: "100%",
    backgroundColor: DEFAULT_COLORS.PRIMARY,
  },
  resetPass: {
    color: DEFAULT_COLORS.WHITE,
  },
  resetPassBtn: {
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    width: "100%",
    backgroundColor: DEFAULT_COLORS.PRIMARY,
  },
});
