import React, { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import CustomMarker from "./components/CustomMarker";
import { useMap } from "./components/useMap";
import { CustomBottomSheet } from "./components/BottomSheet";
import { TopBar } from "./components/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { userLocation } from "../../../../api/redux/slices/baseSlice";
import {
  LocationApiRequest,
  locationData,
} from "../../../../api/redux/slices/locationSlice";

export default function Map() {
  const {
    mapRef,
    selectedMarker,
    handleNavigateToPoint,
    handelResetInitialPosition,
  } = useMap();
  const stateUserLocation = useSelector(userLocation);
  const stateLocationData = useSelector(locationData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LocationApiRequest({}));
  }, []);

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
          {stateLocationData.map((marker) => (
            <CustomMarker
              key={marker.id}
              id={marker.id}
              selectedMarker={selectedMarker}
              color={marker.category.color}
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
