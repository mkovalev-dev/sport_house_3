import {
  Avatar,
  Box,
  FlatList,
  HStack,
  StatusBar,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  UserNotificationListApiRequest,
  UserNotificationListData,
} from "../../../../../../api/redux/slices/userSlice";
import moment from "moment";
import { DEFAULT_COLORS } from "../../../../../../resources/styles/base/baseStyles";
import { unwrapResult } from "@reduxjs/toolkit";

export default function Notification() {
  const dispatch = useDispatch();
  const stateNotificationData = useSelector(UserNotificationListData);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(UserNotificationListApiRequest())
      .then(unwrapResult)
      .then((res) => {
        setRefreshing(false);
      })
      .catch((err) => {
        setRefreshing(false);
      });
  };

  useEffect(() => {
    dispatch(UserNotificationListApiRequest());
  }, []);
  return (
    <View justifyContent={"center"} alignItems={"center"}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        refreshControl={
          <RefreshControl
            tintColor={DEFAULT_COLORS.PRIMARY}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        maxWidth={"100%"}
        height={"100%"}
        data={stateNotificationData}
        renderItem={({ item }) => {
          return (
            <Box
              borderBottomWidth="1"
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <Avatar bg={DEFAULT_COLORS.PRIMARY} size="md">
                  S
                  {!item.is_read && (
                    <Avatar.Badge bg={DEFAULT_COLORS.PRIMARY} />
                  )}
                </Avatar>
                <VStack>
                  <Text color="coolGray.800" bold width={"90%"}>
                    {item.title}
                  </Text>
                  <Text color="coolGray.600" width={"90%"} marginBottom={4}>
                    {item.body}
                  </Text>
                  <Text
                    fontSize="xs"
                    color="coolGray.800"
                    alignSelf="flex-start"
                  >
                    {moment(item.created_date).format("DD MMM YYYY hh:mm")}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          );
        }}
      />
    </View>
  );
}
