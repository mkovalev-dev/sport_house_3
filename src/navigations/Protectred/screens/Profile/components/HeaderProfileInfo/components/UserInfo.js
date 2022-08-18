import { Avatar, Heading, HStack, Icon, Text, View, VStack } from "native-base";
import { DEFAULT_COLORS } from "../../../../../../../resources/styles/base/baseStyles";
import { ApiUrl } from "../../../../../../../lib/ApiUrl";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { UserShortInfoData } from "../../../../../../../api/redux/slices/userSlice";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { setUserLocation } from "../../../../../../../api/redux/slices/baseSlice";

export default function UserInfo() {
  const stateShortUserData = useSelector(UserShortInfoData);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      dispatch(setUserLocation(location.coords));
      let address = await Location.reverseGeocodeAsync(location.coords);
      setLocation(address);
    })();
  }, []);

  let text = "Ожидание локации...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `${location[0].name}`;
  }
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        top: "17%",
      }}
    >
      <>
        <Avatar
          bg={DEFAULT_COLORS.PRIMARY}
          alignSelf="center"
          size="xl"
          style={{ marginBottom: 20 }}
          source={{
            uri: `${ApiUrl()}${stateShortUserData?.avatar}`,
          }}
        >
          <Icon as={AntDesign} name="user" color="#fff" size={"lg"} />
        </Avatar>
        <VStack style={{ justifyContent: "center" }} space={2}>
          <Heading size={"md"} style={{ color: "white", textAlign: "center" }}>
            {stateShortUserData?.full_name}
          </Heading>
          <HStack alignItems="center" justifyContent={"center"} space={1}>
            <Icon as={AntDesign} name="enviromento" color="#fff" />
            <Text style={{ color: "white" }}>{text}</Text>
          </HStack>
        </VStack>
      </>
    </View>
  );
}
