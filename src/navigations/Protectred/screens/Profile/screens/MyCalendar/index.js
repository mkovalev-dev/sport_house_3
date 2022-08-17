import React from "react";
import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
  LocaleConfig,
} from "react-native-calendars/src/index";
import AgendaItem from "./component/AgendaItem";
import { StyleSheet } from "react-native";
import { DEFAULT_COLORS } from "../../../../../../resources/styles/base/baseStyles";
import { StatusBar } from "native-base";

LocaleConfig.locales["ru"] = {
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  monthNamesShort: [
    "Янв.",
    "Фев.",
    "Мар.",
    "Апр.",
    "Май",
    "Июн.",
    "Июл.",
    "Авг.",
    "Сен.",
    "Окт.",
    "Ноя.",
    "Дек.",
  ],
  dayNames: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  dayNamesShort: ["Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб.", "Вс."],
  today: "Сегодня",
};
LocaleConfig.defaultLocale = "ru";

export default function MyCalendar() {
  const renderItem = ({ item }) => {
    return <AgendaItem item={item} />;
  };
  const vacation = {
    key: "vacation",
    color: DEFAULT_COLORS.DARK_GRAY,
    selectedDotColor: "blue",
  };
  const massage = {
    key: "massage",
    color: DEFAULT_COLORS.DARK_GRAY,
    selectedDotColor: "blue",
  };
  const workout = { key: "workout", color: DEFAULT_COLORS.DARK_GRAY };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <CalendarProvider
        date={"2022-08-17"}
        onDateChanged={(date, updateSource) => {
          console.log(date, updateSource);
        }}
        onMonthChange={({ dateString }) => {
          console.log(dateString);
        }}
        showTodayButton
        disabledOpacity={0.6}
        style={{ marginBottom: 90 }}
      >
        <ExpandableCalendar
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            selectedDayBackgroundColor: DEFAULT_COLORS.PRIMARY,
            arrowColor: "orange",
            todayTextColor: DEFAULT_COLORS.PRIMARY,
          }}
          testID={"expandableCalendar"}
          firstDay={1}
          initialPosition={ExpandableCalendar.positions.OPEN}
          onMonthChange={({ dateString }) => {
            console.log(dateString);
          }}
          markingType={"multi-dot"}
          markedDates={{
            "2022-08-17": {
              dots: [vacation, massage, workout],
            },
            "2022-08-18": { dots: [massage, workout] },
          }}
          closeOnDayPress={false}
        />
        <AgendaList
          sections={[
            {
              title: "2022-08-17",
              data: [
                { hour: "12:00", duration: "1ч", title: "Занятия Йогой" },
                { hour: "13:00", duration: "1ч", title: "Бег" },
                { hour: "14:00", duration: "1ч", title: "Отжимания" },
              ],
            },
            {
              title: "2022-08-18",
              data: [
                { hour: "16:00", duration: "1ч", title: "Турнир по футболу" },
                {
                  hour: "17:00",
                  duration: "1ч",
                  title: "Персональная тренировка",
                },
                { hour: "18:00", duration: "1ч", title: "Пилатес" },
                { hour: "19:00", duration: "1ч", title: "Бег на стадионе" },
              ],
            },
          ]}
          sectionStyle={styles.section}
          renderItem={renderItem}
          scrollToNextEvent={true}
          markToday={true}
        />
      </CalendarProvider>
    </>
  );
}

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  section: {
    backgroundColor: "#f2f7f7",
    color: "grey",
    textTransform: "capitalize",
  },
});
