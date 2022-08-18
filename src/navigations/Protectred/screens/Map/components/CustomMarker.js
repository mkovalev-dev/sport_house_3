import { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function CustomMarker({
  id,
  selectedMarker,
  color,
  latitude,
  longitude,
}) {
  return (
    <Marker
      coordinate={{ latitude: latitude, longitude: longitude }}
      onPress={(v) => {}}
    >
      <View style={styles.markerWrapper}>
        <View
          style={[
            styles.marker,
            {
              backgroundColor: color,
            },
          ]}
        ></View>
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  markerWrapper: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    height: 22,
    width: 22,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 2,
  },
});
