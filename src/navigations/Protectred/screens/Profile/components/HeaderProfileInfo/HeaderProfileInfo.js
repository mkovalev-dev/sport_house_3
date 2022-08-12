import { View } from "native-base";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  UserShortInfoApiRequest,
  ViewUserRecInfoApiRequest,
} from "../../../../../../api/redux/slices/userSlice";
import { useIsFocused } from "@react-navigation/native";
import TitleAction from "./components/TitleAction";
import UserInfo from "./components/UserInfo";
import UserParameters from "./components/UserParameters";

export default function HeaderProfileInfo() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(ViewUserRecInfoApiRequest());
      dispatch(UserShortInfoApiRequest());
    }
  }, [isFocused]);

  return (
    <View
      style={{
        height: "28%",
        position: "relative",
      }}
    >
      <TitleAction />
      <UserInfo />
      <UserParameters />
    </View>
  );
}
