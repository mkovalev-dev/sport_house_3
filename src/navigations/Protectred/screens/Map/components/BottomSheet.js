import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { ListItem } from "./ListItem";
import { Heading } from "native-base";
import BottomSheetViewRubric from "./BottomSheetViewRubric";
import { useDispatch, useSelector } from "react-redux";
import {
  LocationApiRequest,
  locationData,
} from "../../../../../api/redux/slices/locationSlice";

export function CustomBottomSheet({ onPressElement }) {
  const sheetRef = useRef(null);
  const stateLocationData = useSelector(locationData);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  return (
    <BottomSheet
      ref={sheetRef}
      index={0}
      snapPoints={["25%", "50%", "85%"]}
      handleStyle={{ backgroundColor: "#fff" }}
      keyboardBehavior={"extend"}
    >
      <BottomSheetTextInput
        style={styles.textInput}
        placeholderTextColor={"black"}
        keyboardType={"default"}
        placeholder={"Поиск..."}
        clearButtonMode={"always"}
        onChangeText={setSearch}
        onSubmitEditing={() => {
          dispatch(
            LocationApiRequest({
              sportType: null,
              search: search,
            })
          );
        }}
      />
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
        {stateLocationData.map((item) => {
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
    backgroundColor: "#ececec",
    color: "black",
  },
});
