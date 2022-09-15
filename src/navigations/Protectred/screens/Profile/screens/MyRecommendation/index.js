import { Box, Heading, Skeleton, StatusBar, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { RecomendationRetrieveApiRequest } from "../../../../../../api/redux/slices/recomendationSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { Alert, FlatList, StyleSheet } from "react-native";
import { DEFAULT_COLORS } from "../../../../../../resources/styles/base/baseStyles";

export default function MyRecommendation() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const getRecomendationData = () => {
    setLoading(true);
    dispatch(RecomendationRetrieveApiRequest())
      .then(unwrapResult)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        Alert.alert("При загрузке рекомендации произошла ошибка!");
      });
  };
  useEffect(() => {
    getRecomendationData();
  }, []);
  return (
    <View
      justifyContent={"center"}
      alignItems={"center"}
      paddingLeft={6}
      paddingRight={6}
    >
      <StatusBar barStyle="dark-content" />
      {!loading ? (
        <Box style={styles.box}>
          <Text textAlign={"center"}>
            Дата расчета:{" "}
            {moment(data.created_date).format("DD.MM.YYYY, hh:mm")}
          </Text>
        </Box>
      ) : (
        <Skeleton.Text mt={2} p={12} />
      )}
      {!loading ? (
        <Box style={styles.box}>
          <Heading
            size={"sm"}
            color={DEFAULT_COLORS.DARK_GRAY_TAB_MENU}
            marginBottom={4}
          >
            Виды спорта:
          </Heading>
          <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={data.sport}
            renderItem={(item) => {
              return (
                <>
                  <Box
                    style={
                      item.index === 0 ? styles.firstSportBox : styles.sportBox
                    }
                    bg={
                      item.index === 0 && {
                        linearGradient: {
                          colors: [DEFAULT_COLORS.PRIMARY, "orange.500"],
                          start: [1, 0],
                          end: [0, 1],
                        },
                      }
                    }
                  >
                    <Text
                      style={
                        item.index === 0
                          ? { color: "#fff", fontWeight: "bold", fontSize: 18 }
                          : {
                              color: DEFAULT_COLORS.DARK_GRAY_TAB_MENU,
                              fontWeight: "bold",
                              fontSize: 18,
                            }
                      }
                    >
                      {item.item.name}
                    </Text>
                  </Box>
                  <Box style={{ width: 12 }} />
                </>
              );
            }}
          />
          <Text textAlign={"center"} marginTop={4} color={"#bdbdbd"}>
            Какой нибудь поясняющий текст для пользователя
          </Text>
        </Box>
      ) : (
        <Skeleton.Text mt={2} p={12} />
      )}
      {!loading ? (
        <Box style={styles.box}>
          <Heading size={"sm"} color={DEFAULT_COLORS.RED} marginRight={4}>
            Противопоказанные
          </Heading>
          <Heading
            size={"sm"}
            color={DEFAULT_COLORS.DARK_GRAY_TAB_MENU}
            marginBottom={4}
          >
            Виды спорта:
          </Heading>
          <FlatList
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={data.no_rec_sport}
            renderItem={(item) => {
              return (
                <>
                  <Box
                    style={
                      item.index === 0 ? styles.firstSportBox : styles.sportBox
                    }
                    bg={
                      item.index === 0 && {
                        linearGradient: {
                          colors: [DEFAULT_COLORS.PRIMARY, "orange.500"],
                          start: [1, 0],
                          end: [0, 1],
                        },
                      }
                    }
                  >
                    <Text
                      style={
                        item.index === 0
                          ? { color: "#fff", fontWeight: "bold", fontSize: 18 }
                          : {
                              color: DEFAULT_COLORS.DARK_GRAY_TAB_MENU,
                              fontWeight: "bold",
                              fontSize: 18,
                            }
                      }
                    >
                      {item.item.name}
                    </Text>
                  </Box>
                  <Box style={{ width: 12 }} />
                </>
              );
            }}
          />
          <Text textAlign={"center"} marginTop={4} color={"#bdbdbd"}>
            Какой нибудь поясняющий текст для пользователя
          </Text>
        </Box>
      ) : (
        <Skeleton.Text mt={2} p={12} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 16,
    backgroundColor: DEFAULT_COLORS.WHITE,
    width: "100%",
    padding: 16,
    borderRadius: 12,
  },
  firstSportBox: {
    padding: 16,
    height: 150,
    width: 150,
    borderRadius: 12,
  },
  sportBox: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: DEFAULT_COLORS.DARK_GRAY_TAB_MENU,
    padding: 16,
    height: 150,
    width: 150,
  },
});
