import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Pressable,
  ScrollView,
  StatusBar,
  VStack,
} from "native-base";
import { DEFAULT_COLORS } from "../../../../resources/styles/base/baseStyles";
import MapView from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import ScrollBottomSheet from "react-native-scroll-bottom-sheet";

const windowHeight = Dimensions.get("window").height;
const myPlace = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [55.84277, 37.55348],
      },
    },
  ],
};
export default function Map() {
  return (
    <>
      <View style={stylesMap.container}>
        <StatusBar barStyle="light-content" />
        <MapView
          style={stylesMap.map}
          showsUserLocation={true}
          showsCompass={true}
          showsScale={true}
          mapType={"terrain"}
          userInterfaceStyle={"dark"}
          initialRegion={{
            latitude: 55.75248,
            longitude: 37.62302,
            latitudeDelta: 0.2,
            longitudeDelta: 0.1921,
          }}
        />
        <ScrollBottomSheet
          componentType="FlatList"
          snapPoints={[100, "50%", windowHeight - 200]}
          initialSnapIndex={2}
          renderHandle={() => (
            <View style={styles.header}>
              <View style={styles.panelHandle} />
              <Input
                mt={4}
                width="100%"
                height={10}
                variant="filled"
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="search" />}
                    size={6}
                    ml="2"
                    color="muted.400"
                  />
                }
                size={6}
                placeholder="Поиск"
              />
            </View>
          )}
          data={Array.from({ length: 1 }).map((_, i) => String(i))}
          keyExtractor={(i) => i}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <ScrollView style={{ marginBottom: 100 }}>
                {/*<ScrollView horizontal={true} style={{ marginBottom: 15 }}>*/}
                {/*  <Box style={stylesStories.container}></Box>*/}
                {/*  <Box style={stylesStories.container}></Box>*/}
                {/*  <Box style={stylesStories.container}></Box>*/}
                {/*  <Box style={stylesStories.container}></Box>*/}
                {/*  <Box style={stylesStories.container}></Box>*/}
                {/*  <Box style={stylesStories.container}></Box>*/}
                {/*</ScrollView>*/}
                <Heading>Рубрики</Heading>
                <VStack mt={4} space={4}>
                  <HStack space={4}>
                    <Pressable
                      onPress={() => {
                        console.log("ee");
                      }}
                    >
                      <Box style={styleRubric.container}>
                        <Heading size={"md"}>Футбол</Heading>
                        <Image
                          source={require("../../../../resources/img/rubrick/football-players.png")}
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
                    <Box style={styleRubric.container}>
                      <Heading size={"md"}>Баскетбол</Heading>
                      <Image
                        source={require("../../../../resources/img/rubrick/basketball-player.png")}
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
                  </HStack>
                  <HStack space={4}>
                    <Box style={styleRubric.container}>
                      <Heading size={"md"}>Бокс</Heading>
                      <Image
                        source={require("../../../../resources/img/rubrick/boxer.png")}
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
                    <Box style={styleRubric.container}>
                      <Heading size={"md"}>Бег</Heading>
                      <Image
                        source={require("../../../../resources/img/rubrick/running-man.png")}
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
                  </HStack>
                  <HStack space={4}>
                    <Box style={styleRubric.container}>
                      <Heading size={"md"}>Плавание</Heading>
                      <Image
                        source={require("../../../../resources/img/rubrick/swimmer.png")}
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
                    <Box style={styleRubric.container}>
                      <Heading size={"md"}>Теннис</Heading>
                      <Image
                        source={require("../../../../resources/img/rubrick/tennis-player.png")}
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
                  </HStack>
                  <HStack space={4}>
                    <Box style={styleRubric.container}>
                      <Heading size={"md"}>Гимнастика</Heading>
                      <Image
                        source={require("../../../../resources/img/rubrick/gymnastics.png")}
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
                    <Box style={styleRubric.container}>
                      <Heading size={"md"}>Фитнес</Heading>
                      <Image
                        source={require("../../../../resources/img/rubrick/weightlifter.png")}
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
                  </HStack>
                </VStack>
              </ScrollView>
            </View>
          )}
          contentContainerStyle={styles.contentContainerStyle}
        />
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
