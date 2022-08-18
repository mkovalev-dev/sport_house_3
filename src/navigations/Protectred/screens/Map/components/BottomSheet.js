import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ListItem } from "./ListItem";
import { MARKERS_DATA } from "./data";
import { Heading } from "native-base";
import BottomSheetViewRubric from "./BottomSheetViewRubric";

export function CustomBottomSheet({ onPressElement }) {
  const sheetRef = useRef(null);
  return (
    <BottomSheet
      ref={sheetRef}
      index={0}
      snapPoints={["25%", "50%", "85%"]}
      handleStyle={{ backgroundColor: "#fff" }}
      keyboardBehavior={"interactive"}
    >
      <BottomSheetTextInput style={styles.textInput} placeholder={"Поиск..."} />
      <BottomSheetViewRubric />
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
              sheetRef={sheetRef}
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
