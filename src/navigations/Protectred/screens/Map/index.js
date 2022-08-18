import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { DEFAULT_COLORS } from "../../../../resources/styles/base/baseStyles";
import MapView from "react-native-maps";
import { MARKERS_DATA } from "./components/data";
import CustomMarker from "./components/CustomMarker";
import { useMap } from "./components/useMap";
import { CustomBottomSheet } from "./components/BottomSheet";
import { TopBar } from "./components/TopBar";

export default function Map() {
  const {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
    handelResetInitialPosition,
  } = useMap();

  return (
    <>
      <View style={stylesMap.container}>
        <TopBar onPressElement={handelResetInitialPosition} />
        <MapView
          ref={mapRef}
          style={stylesMap.map}
          showsUserLocation={true}
          showsCompass={true}
          showsScale={true}
          mapType={"terrain"}
          userInterfaceStyle={"light"}
          showsMyLocationButton={true}
          zoomEnabled={true}
          followsUserLocation={true}
          initialRegion={{
            latitude: 55.75248,
            longitude: 37.62302,
            latitudeDelta: 0.2,
            longitudeDelta: 0.1921,
          }}
        >
          {MARKERS_DATA.map((marker) => (
            <CustomMarker
              key={marker.id}
              id={marker.id}
              selectedMarker={selectedMarker}
              color={marker.color}
              latitude={marker.latitude}
              longitude={marker.longitude}
            ></CustomMarker>
          ))}
        </MapView>
        <CustomBottomSheet onPressElement={handleNavigateToPoint} />
      </View>
    </>
  );
}

const styleRubric = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 2 - 24,
    height: 110,
    borderRadius: 15,
    padding: 10,
    backgroundColor: DEFAULT_COLORS.WHITE,
  },
});

const stylesMap = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

const stylesStories = StyleSheet.create({
  container: {
    width: 90,
    height: 110,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: DEFAULT_COLORS.DARK_GRAY,
    marginLeft: 5,
    marginRight: 5,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 16,
    height: "100%",
    backgroundColor: "#F3F4F9",
  },
  header: {
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHandle: {
    width: 40,
    height: 4,
    backgroundColor: DEFAULT_COLORS.DARK_GRAY,
    borderRadius: 4,
  },
  item: {
    width: "100%",
  },
});
