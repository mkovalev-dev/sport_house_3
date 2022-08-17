import { HStack, IconButton, ScrollView, VStack } from "native-base";
import HealthKit from "./components/HealthKit";
import ActionButton from "./components/ActionButton";
import { AntDesign } from "@expo/vector-icons";
import { DEFAULT_COLORS } from "../../../../../../resources/styles/base/baseStyles";
import { useState } from "react";
import AlertRefreshRec from "./components/AlertRefreshRec";
import { useSelector } from "react-redux";
import { UserShortInfoData } from "../../../../../../api/redux/slices/userSlice";

export default function HeaderActionMenu() {
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const stateShortUserData = useSelector(UserShortInfoData);
  return (
    <ScrollView
      h="80"
      _contentContainerStyle={{
        px: "20px",
        mb: "4",
        paddingBottom: 180,
      }}
    >
      <VStack space={3}>
        <HealthKit />
        {stateShortUserData?.recommendation ? (
          <HStack space={4}>
            <ActionButton
              title="Мои рекомендации"
              navigateTo="MyRecommendation"
              styleType="solid"
              iconName="export"
            />
            <IconButton
              borderRadius={20}
              variant="outline"
              onPress={() => {
                setIsOpenAlert(true);
              }}
              _pressed={{ backgroundColor: "#fff" }}
              style={{
                width: 74,
                borderWidth: 1,
                borderColor: DEFAULT_COLORS.DARK_GRAY,
                height: 57.5,
                justifyContent: "center",
              }}
              _icon={{
                as: AntDesign,
                name: "sync",
                color: DEFAULT_COLORS.DARK_GRAY,
              }}
            />
          </HStack>
        ) : (
          <ActionButton
            title="Получить рекомендации"
            navigateTo="Recommendation"
            styleType="solid"
            iconName="export"
          />
        )}
        <ActionButton
          title="Мой календарь"
          navigateTo="MyCalendar"
          styleType="border"
          iconName="calendar"
        />
        <ActionButton
          title="Мои тренера"
          navigateTo=""
          styleType="border"
          iconName="team"
        />
        <ActionButton
          title="Мои площадки"
          navigateTo=""
          styleType="border"
          iconName="enviromento"
        />
        <ActionButton
          title="Мои мероприятия"
          navigateTo=""
          styleType="border"
          iconName="carryout"
        />
      </VStack>
      {isOpenAlert && (
        <AlertRefreshRec isOpen={isOpenAlert} setIsOpen={setIsOpenAlert} />
      )}
    </ScrollView>
  );
}
