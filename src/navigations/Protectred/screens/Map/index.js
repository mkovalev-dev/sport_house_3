import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { MARKERS_DATA } from "./components/data";
import CustomMarker from "./components/CustomMarker";
import { useMap } from "./components/useMap";
import { CustomBottomSheet } from "./components/BottomSheet";
import { TopBar } from "./components/TopBar";
import { useSelector } from "react-redux";
import { userLocation } from "../../../../api/redux/slices/baseSlice";

export default function Map() {
  const {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
    handelResetInitialPosition,
  } = useMap();
  const stateUserLocation = useSelector(userLocation);
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
          // followsUserLocation={true}
          initialRegion={{
            latitude: stateUserLocation.latitude,
            longitude: stateUserLocation.longitude,
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
