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
import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { DEFAULT_COLORS } from "../../../../../resources/styles/base/baseStyles";
import { Spacer } from "native-base/src/components/primitives/Flex";

const ACTION_BUTTON = [
  {
    name: "Футбол",
    slug: "football",
    img: require("../../../../../resources/img/rubrick/football-players.png"),
  },
  {
    name: "Баскетбол",
    slug: "basketball",
    img: require("../../../../../resources/img/rubrick/basketball-player.png"),
  },
  {
    name: "Бокс",
    slug: "box",
    img: require("../../../../../resources/img/rubrick/boxer.png"),
  },
  {
    name: "Бег",
    slug: "running",
    img: require("../../../../../resources/img/rubrick/running-man.png"),
  },
  {
    name: "Плавание",
    slug: "swim",
    img: require("../../../../../resources/img/rubrick/swimmer.png"),
  },
  {
    name: "Теннис",
    slug: "box",
    img: require("../../../../../resources/img/rubrick/tennis-player.png"),
  },
  {
    name: "Гимнастика",
    slug: "gymnastic",
    img: require("../../../../../resources/img/rubrick/gymnastics.png"),
  },
  {
    name: "Фитнес",
    slug: "fitnes",
    img: require("../../../../../resources/img/rubrick/weightlifter.png"),
  },
];

export default function BottomSheetViewRubric() {
  const [selected, setSelected] = useState(null);
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
        {ACTION_BUTTON.map((item) => {
          return (
            <Pressable
              key={item.name}
              onPress={() => {
                setSelected(item.slug);
              }}
            >
              <Box
                key={item.slug}
                style={
                  selected === item.slug
                    ? styleRubric.containerSelected
                    : styleRubric.containerUnselected
                }
              >
                <Heading size={"md"}>{item.name}</Heading>
                <Image
                  source={item.img}
                  style={{
                    width: 50,
                    height: 50,
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                  }}
                  alt="distance"
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
