import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Icon, IconButton, Pressable } from "native-base";
import { useSelector } from "react-redux";
import { UserShortInfoData } from "../../../../../api/redux/slices/userSlice";
import { DEFAULT_COLORS } from "../../../../../resources/styles/base/baseStyles";
import { ApiUrl } from "../../../../../lib/ApiUrl";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function TopBar({ onPressElement }) {
  const stateShortUserData = useSelector(UserShortInfoData);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Avatar
          bg={DEFAULT_COLORS.PRIMARY}
          alignSelf="center"
          size={45}
          source={{
            uri: `${ApiUrl()}${stateShortUserData?.avatar}`,
          }}
        >
          <Icon as={AntDesign} name="user" color="#fff" size={"lg"} />
        </Avatar>
      </Pressable>
      <IconButton
        variant={"outline"}
        style={{ borderColor: "#000000" }}
        borderRadius={25}
        width={45}
        height={45}
        onPress={onPressElement}
        _icon={{
          as: AntDesign,
          name: "sync",
          color: "black",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    top: 40,
    width: "100%",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
