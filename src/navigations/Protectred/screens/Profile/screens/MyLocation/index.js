import {
  AspectRatio,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Skeleton,
  StatusBar,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  UserFavoriteLocationApiRequest,
  userLocationData,
} from "../../../../../../api/redux/slices/locationSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { Alert, FlatList, RefreshControl, StyleSheet } from "react-native";
import { DEFAULT_COLORS } from "../../../../../../resources/styles/base/baseStyles";
import { ApiUrl } from "../../../../../../lib/ApiUrl";

export default function MyLocation() {
  const [isloading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const stateUserLocationData = useSelector(userLocationData);

  useEffect(() => {
    setIsLoading(true);
    dispatch(UserFavoriteLocationApiRequest({}))
      .then(unwrapResult)
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        Alert.alert("Не удалось загрузить данные");
        setIsLoading(true);
      });
  }, []);

  const onRefresh = () => {
    setIsLoading(true);
    dispatch(UserFavoriteLocationApiRequest({}))
      .then(unwrapResult)
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {!isloading ? (
        <FlatList
          refreshControl={
            <RefreshControl
              tintColor={DEFAULT_COLORS.PRIMARY}
              refreshing={isloading}
              onRefresh={onRefresh}
            />
          }
          data={stateUserLocationData}
          marginBottom={90}
          renderItem={({ item }) => {
            return (
              <VStack space={4} key={item.id} marginBottom={4}>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    borderTopLeftRadius={25}
                    borderTopRightRadius={25}
                    source={{
                      uri: `${ApiUrl()}${item.image}`,
                    }}
                    alt="image"
                  />
                </AspectRatio>
                <Heading bold size={"md"} color={DEFAULT_COLORS.DARK_GRAY}>
                  {item.name}
                </Heading>
                <Text color={"#969696"}>{item.direction}</Text>
                <HStack space={2}>
                  {item.sports.map((sp) => {
                    return (
                      <Box
                        style={{
                          backgroundColor: "rgba(229,156,79,0.36)",
                          padding: 5,
                          minWidth: 95,
                          borderRadius: 10,
                        }}
                      >
                        <Text textAlign={"center"}>{sp.name}</Text>
                      </Box>
                    );
                  })}
                </HStack>
                <Button
                  colorScheme={"orange"}
                  style={{
                    height: 50.5,
                    backgroundColor: DEFAULT_COLORS.PRIMARY,
                  }}
                >
                  Подробнее
                </Button>
                <Divider />
              </VStack>
            );
          }}
        />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl
              tintColor={DEFAULT_COLORS.PRIMARY}
              refreshing={isloading}
              onRefresh={onRefresh}
            />
          }
          data={[1, 2, 3]}
          marginBottom={90}
          renderItem={(item) => {
            return (
              <VStack space={8} key={item.item} marginBottom={35}>
                <Skeleton h="40" startColor={"#d5d5d5"} />
                <Skeleton.Text />
              </VStack>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingLeft: 15, paddingRight: 15, paddingTop: 15 },
});
