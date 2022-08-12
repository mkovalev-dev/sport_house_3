import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../../../../resources/styles/base/baseStyles";
import { Avatar, Button, HStack, Icon, useToast, View } from "native-base";
import HeaderGoBack from "../../../../../../../components/HeaderGoBack";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import {
  UploadUserAvatarApiRequest,
  UserShortInfoData,
} from "../../../../../../../api/redux/slices/userSlice";
import { ApiUrl } from "../../../../../../../lib/ApiUrl";
import { unwrapResult } from "@reduxjs/toolkit";

export default function PhotoEditHeader() {
  const [image, setImage] = useState(null);
  const stateShortUserData = useSelector(UserShortInfoData);
  const toast = useToast();
  const dispatch = useDispatch();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      postToServer(result);
      setImage(result.uri);
    }
  };

  const postToServer = (img) => {
    const formData = new FormData();
    formData.append("image", {
      uri: img.uri,
      type: "image/jpg",
      name: "Avatar.jpg",
    });

    dispatch(UploadUserAvatarApiRequest(formData))
      .then(unwrapResult)
      .then(() => {
        toast.show({
          description: "Успешно сохранено!",
          placement: "top",
        });
      });
  };

  return (
    <View
      style={{
        backgroundColor: DEFAULT_COLORS.DARK_GRAY,
        width: "100%",
        height: "35%",
      }}
    >
      <Avatar
        bg={DEFAULT_COLORS.PRIMARY}
        alignSelf="center"
        size="lg"
        borderRadius={0}
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: image ? image : `${ApiUrl()}${stateShortUserData?.avatar}`,
        }}
        _image={{ borderRadius: 0 }}
      >
        <Icon as={AntDesign} name="user" color="#fff" size={"lg"} />
      </Avatar>
      <HeaderGoBack />
      <View
        style={{
          position: "absolute",
          top: DEFAULT_STYLE_PARAMS.paddingTop * 2,
          right: 0,
          paddingRight: DEFAULT_STYLE_PARAMS.paddingRight / 2,
        }}
      >
        <HStack>
          <Button variant="ghost" onPress={pickImage}>
            <AntDesign name="edit" size={24} color="white" />
          </Button>
          {/*{stateShortUserData.avatar && (*/}
          {/*  <Button variant="ghost">*/}
          {/*    <AntDesign name="delete" size={24} color="white" />*/}
          {/*  </Button>*/}
          {/*)}*/}
        </HStack>
      </View>
    </View>
  );
}
