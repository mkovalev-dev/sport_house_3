import { StatusBar, Text, View } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import { UserShortInfoData } from "../../../../../../api/redux/slices/userSlice";
import moment from "moment";

export default function MyRecommendation() {
  const stateShortUserData = useSelector(UserShortInfoData);
  return (
    <View justifyContent={"center"} alignItems={"center"}>
      <StatusBar barStyle="dark-content" />
      <Text>
        Дата расчета:{" "}
        {moment(stateShortUserData.recommendation.created_date).format(
          "DD MMMM YYYY, hh:mm"
        )}
      </Text>
    </View>
  );
}
