import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, View } from "native-base";
import React from "react";
import isEmpty from "lodash/isEmpty";
import { DEFAULT_COLORS } from "../../../../../../../resources/styles/base/baseStyles";

export default function AgendaItem({ item }) {
  if (isEmpty(item)) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned Today</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert(item.title);
      }}
      style={styles.item}
      testID={"sasd"}
    >
      <View>
        <Text style={styles.itemHourText}>{item.hour}</Text>
        <Text style={styles.itemDurationText}>{item.duration}</Text>
      </View>
      <Text style={styles.itemTitleText}>{item.title}</Text>
      <View style={styles.itemButtonContainer}>
        <Button
          variant={"ghost"}
          size={"xs"}
          _text={{ color: DEFAULT_COLORS.PRIMARY }}
          onPress={() => {
            Alert.alert("Show me more");
          }}
        >
          Подробнее
        </Button>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    flexDirection: "row",
  },
  itemHourText: {
    color: "black",
  },
  itemDurationText: {
    color: "grey",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  itemTitleText: {
    color: "black",
    marginLeft: 16,
    fontWeight: "bold",
    fontSize: 14,
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  emptyItemText: {
    color: "lightgrey",
    fontSize: 14,
  },
});
