import {
  Box,
  Heading,
  HStack,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
} from "native-base";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { DEFAULT_COLORS } from "../../../../../resources/styles/base/baseStyles";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { useDispatch, useSelector } from "react-redux";
import {
  LocationApiRequest,
  LocationSportTypeApiRequest,
  locationSportTypeData,
} from "../../../../../api/redux/slices/locationSlice";
import { ApiUrl } from "../../../../../lib/ApiUrl";

export default function BottomSheetViewRubric() {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const stateLocationSportTypesData = useSelector(locationSportTypeData);

  useEffect(() => {
    dispatch(LocationSportTypeApiRequest({}));
  }, []);
  return (
    <BottomSheetView>
      <StatusBar barStyle="dark-content" />
      <HStack>
        <Heading
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          Рубрики
        </Heading>
        <Spacer />
        {selected && (
          <Pressable
            onPress={() => {
              setSelected(null);
              dispatch(LocationApiRequest({}));
            }}
          >
            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 20,
                marginRight: 20,
                color: "#1091c9",
              }}
            >
              Сбросить
            </Text>
          </Pressable>
        )}
      </HStack>
      <ScrollView
        horizontal={true}
        style={{ marginBottom: 15, marginLeft: 10 }}
      >
        {stateLocationSportTypesData.map((item) => {
          return (
            <Pressable
              key={item.id}
              onPress={() => {
                setSelected(item.id);
                console.log("preess");
                dispatch(LocationApiRequest({ sportType: item.id }));
              }}
            >
              <Box
                key={item.slug}
                style={
                  selected === item.id
                    ? styleRubric.containerSelected
                    : styleRubric.containerUnselected
                }
              >
                <Heading size={"md"}>{item.name}</Heading>
                <Image
                  source={{
                    uri: `${ApiUrl()}${item.icon}`,
                  }}
                  style={{
                    width: 50,
                    height: 50,
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                  }}
                  alt={item.slug}
                />
              </Box>
            </Pressable>
          );
        })}
      </ScrollView>
    </BottomSheetView>
  );
}

const styleRubric = StyleSheet.create({
  containerUnselected: {
    width: Dimensions.get("window").width / 2 - 24,
    height: 110,
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: DEFAULT_COLORS.WHITE,
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  containerSelected: {
    width: Dimensions.get("window").width / 2 - 24,
    height: 110,
    borderRadius: 15,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#dcdcdc",
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
});
