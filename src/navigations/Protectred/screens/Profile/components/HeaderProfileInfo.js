import {
  Avatar,
  Heading,
  HStack,
  Icon,
  IconButton,
  Skeleton,
  Text,
  View,
  VStack,
} from "native-base";
import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../../resources/styles/base/baseStyles";
import { AntDesign } from "@expo/vector-icons";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  UserShortInfoApiRequest,
  UserShortInfoData,
  ViewUserRecInfoApiRequest,
} from "../../../../../api/redux/slices/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import * as Location from "expo-location";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { ApiUrl } from "../../../../../lib/ApiUrl";

export default function HeaderProfileInfo() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const stateShortUserData = useSelector(UserShortInfoData);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const isFocused = useIsFocused();
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync(location.coords);
      setLocation(address);
    })();
  }, []);

  let text = "Ожидание локации...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = location[0].city;
  }

  useEffect(() => {
    setIsLoading(true);
    if (isFocused) {
      dispatch(ViewUserRecInfoApiRequest());
      dispatch(UserShortInfoApiRequest())
        .then(unwrapResult)
        .then((res) => {
          setIsLoading(false);
        })
        .catch((err) => {
          // console.log(err);
        });
    }
  }, [isFocused]);

  return (
    <View
      style={{
        height: "33%",
        position: "relative",
      }}
    >
      <HStack
        alignItems="center"
        style={{
          position: "absolute",
          top: 65,
          width: "100%",
          paddingLeft: DEFAULT_STYLE_PARAMS.paddingLeft,
          paddingRight: DEFAULT_STYLE_PARAMS.paddingRight,
        }}
      >
        <Text italic color="white" fontSize={18}>
          Sport House
        </Text>
        <Spacer />
        <IconButton
          colorScheme="coolGray"
          variant={"ghost"}
          _icon={{
            as: AntDesign,
            name: "notification",
            color: "#ffffff",
          }}
        />
      </HStack>
      <HStack
        space={4}
        alignItems="center"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          paddingLeft: DEFAULT_STYLE_PARAMS.paddingLeft,
        }}
      >
        <>
          {!isLoading ? (
            <Avatar
              bg={DEFAULT_COLORS.PRIMARY}
              alignSelf="center"
              size="lg"
              source={{
                uri: `${ApiUrl()}${stateShortUserData?.avatar}`,
              }}
            >
              <Icon as={AntDesign} name="user" color="#fff" size={"lg"} />
            </Avatar>
          ) : (
            <Skeleton size="12" rounded="full" />
          )}
          {!isLoading ? (
            <VStack style={{ justifyContent: "center" }}>
              <Heading size={"sm"} style={{ color: "white" }}>
                {stateShortUserData?.full_name}
              </Heading>
              <HStack alignItems="center" space={1}>
                <Icon as={AntDesign} name="enviromento" color="#fff" />
                <Text style={{ color: "white" }}>{text}</Text>
              </HStack>
            </VStack>
          ) : (
            <VStack style={{ justifyContent: "center" }} space={2}>
              <Skeleton h="1.5" flex="2" w="32" rounded="full" />
              <Skeleton h="1" flex="2" w="24" rounded="full" />
            </VStack>
          )}
        </>
        <View
          style={{
            justifyContent: "center",
            position: "absolute",
            right: 0,
            paddingRight: DEFAULT_STYLE_PARAMS.paddingRight,
          }}
        >
          <IconButton
            colorScheme="coolGray"
            variant={"outline"}
            style={{
              borderRadius: DEFAULT_STYLE_PARAMS.borderRadius,
              borderColor: "#969696",
            }}
            _icon={{
              as: AntDesign,
              name: "setting",
              color: "#969696",
            }}
            onPress={() => {
              navigation.navigate("Settings");
            }}
          />
        </View>
      </HStack>
    </View>
  );
}
