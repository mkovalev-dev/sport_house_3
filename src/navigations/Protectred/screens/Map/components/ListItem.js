import React, { useEffect, useRef, useState } from "react";
import { I18nManager, Pressable, StyleSheet, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Avatar, Icon } from "native-base";
import { useDispatch } from "react-redux";
import { AddLocationToFavoriteApiRequest } from "../../../../../api/redux/slices/locationSlice";

export function ListItem({ item, onPressElement, sheetRef }) {
  const swipeRef = useRef();
  const [isFavorite, setIsFavorite] = useState(item.is_favorite);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsFavorite(item.is_favorite);
  }, []);
  const renderLeftActions = (progress, dragX) => {
    return (
      <View
        style={{
          width: 96,
          flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
        }}
      >
        <RectButton
          style={styles.rightActionFavorite}
          onPress={() => {
            setIsFavorite(!isFavorite);
            dispatch(AddLocationToFavoriteApiRequest(item.id));
            swipeRef.current.close();
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Icon
            as={AntDesign}
            name={isFavorite ? "star" : "staro"}
            color="#fff"
            size={"lg"}
          />
        </RectButton>
      </View>
    );
  };
  return (
    <Swipeable
      ref={swipeRef}
      renderRightActions={renderLeftActions}
      rightThreshold={30}
    >
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#FAFAFA" : "white",
          },
          styles.item,
        ]}
        onPress={() => {
          onPressElement(item.id, item.latitude, item.longitude);
          sheetRef.current.collapse();
        }}
      >
        <Avatar style={[styles.logo, { backgroundColor: item.category.color }]}>
          <Avatar.Badge bg={"rgba(255,255,255,0)"} borderWidth={0}>
            <Icon
              as={AntDesign}
              name={isFavorite && "star"}
              color="#fff"
              size={"sm"}
            />
          </Avatar.Badge>
        </Avatar>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.direction}>{item.direction}</Text>
        </View>
      </Pressable>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
  },
  logo: {
    marginRight: 19,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    height: "65%",
    width: "65%",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2F3136",
  },
  direction: {
    fontSize: 14,
    fontWeight: "400",
    color: "#989CA5",
  },
  rightActionFavorite: {
    flex: 1,
    backgroundColor: "#f5a453",
    justifyContent: "center",
  },
  leftAction2: {
    flex: 1,
    backgroundColor: "#e51d1d",
    justifyContent: "center",
  },
  actionText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "transparent",
    padding: 10,
  },
  rightAction: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
