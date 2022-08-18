import React, { useRef } from "react";
import { Dimensions, StyleSheet } from "react-native";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ListItem } from "./ListItem";
import { MARKERS_DATA } from "./data";
import {
  Box,
  Heading,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
} from "native-base";
import { DEFAULT_COLORS } from "../../../../../resources/styles/base/baseStyles";

export function CustomBottomSheet({ onPressElement }) {
  const sheetRef = useRef(null);
  return (
    <BottomSheet
      ref={sheetRef}
      index={1}
      snapPoints={["25%", "50%", "85%"]}
      handleStyle={{ backgroundColor: "#fff" }}
    >
      <BottomSheetTextInput style={styles.textInput} placeholder={"Поиск..."} />
      <BottomSheetView>
        <StatusBar barStyle="dark-content" />
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
        <ScrollView
          horizontal={true}
          style={{ marginBottom: 15, marginLeft: 10 }}
        >
          <Pressable
            onPress={() => {
              console.log("ee");
            }}
          >
            <Box style={styleRubric.container}>
              <Heading size={"md"}>Футбол</Heading>
              <Image
                source={require("../../../../../resources/img/rubrick/football-players.png")}
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
          <Pressable
            onPress={() => {
              console.log("ee");
            }}
          >
            <Box style={styleRubric.container}>
              <Heading size={"md"}>Баскетбол</Heading>
              <Image
                source={require("../../../../../resources/img/rubrick/basketball-player.png")}
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
          <Pressable
            onPress={() => {
              console.log("ee");
            }}
          >
            <Box style={styleRubric.container}>
              <Heading size={"md"}>Бокс</Heading>
              <Image
                source={require("../../../../../resources/img/rubrick/boxer.png")}
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
          <Pressable
            onPress={() => {
              console.log("ee");
            }}
          >
            <Box style={styleRubric.container}>
              <Heading size={"md"}>Бег</Heading>
              <Image
                source={require("../../../../../resources/img/rubrick/running-man.png")}
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
          <Pressable
            onPress={() => {
              console.log("ee");
            }}
          >
            <Box style={styleRubric.container}>
              <Heading size={"md"}>Плавание</Heading>
              <Image
                source={require("../../../../../resources/img/rubrick/swimmer.png")}
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
          <Pressable
            onPress={() => {
              console.log("ee");
            }}
          >
            <Box style={styleRubric.container}>
              <Heading size={"md"}>Теннис</Heading>
              <Image
                source={require("../../../../../resources/img/rubrick/tennis-player.png")}
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
          <Pressable
            onPress={() => {
              console.log("ee");
            }}
          >
            <Box style={styleRubric.container}>
              <Heading size={"md"}>Гимнастика</Heading>
              <Image
                source={require("../../../../../resources/img/rubrick/gymnastics.png")}
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
          <Pressable
            onPress={() => {
              console.log("ee");
            }}
          >
            <Box style={styleRubric.container}>
              <Heading size={"md"}>Фитнес</Heading>
              <Image
                source={require("../../../../../resources/img/rubrick/weightlifter.png")}
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
        </ScrollView>
      </BottomSheetView>
      <BottomSheetView>
        <Heading
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          Локации
        </Heading>
      </BottomSheetView>
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        {MARKERS_DATA.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              onPressElement={onPressElement}
            />
          );
        })}
      </BottomSheetScrollView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
    paddingBottom: 90,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
  textInput: {
    alignSelf: "stretch",
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#e3e3e3",
    color: "black",
  },
});

const styleRubric = StyleSheet.create({
  container: {
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
});
