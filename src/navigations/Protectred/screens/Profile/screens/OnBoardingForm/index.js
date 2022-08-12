import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WeightScreen from "./screens/WeightScreen";
import HeightScreen from "./screens/HeightScreen";
import GenderScreen from "./screens/GenderScreen";
import AgeScreen from "./screens/AgeScreen";
import PhysicalTrainingScreen from "./screens/PhysicalTrainingScreen";
import MeatScreen from "./screens/MeatScreen";
import FishScreen from "./screens/FishScreen";
import MilkScreen from "./screens/MilkScreen";
import EggScreen from "./screens/EggScreen";
import CitrusScreen from "./screens/CitrusScreen";
import NutScreen from "./screens/NutScreen";
import HoneyScreen from "./screens/HoneyScreen";
import MusculoskeletalSystemScreen from "./screens/MusculoskeletalSystemScreen";
import DiabetesScreen from "./screens/DiabetesScreen";
import HealthScreen from "./screens/HealthScreen";
import VaricoseScreen from "./screens/VaricoseScreen";
import EpilepsyScreen from "./screens/EpilepsyScreen";
import MyopiaScreen from "./screens/MyopiaScreen";
import BreathScreen from "./screens/BreathScreen";
import DigestionScreen from "./screens/DigestionScreen";
import FinishScreen from "./screens/FinishScreen";
import { useSelector } from "react-redux";
import { ViewUserRecInfoData } from "../../../../../../api/redux/slices/userSlice";

const OnBoardingFormStack = createNativeStackNavigator();

const MAX_STEPS = 20;

export default function OnBoardingFormNavigator() {
  const stateRecUserInfoData = useSelector(ViewUserRecInfoData);
  return (
    <OnBoardingFormStack.Navigator initialRouteName="Gender">
      <OnBoardingFormStack.Screen
        name="Gender"
        component={GenderScreen}
        initialParams={{
          step: 1,
          lastStep: MAX_STEPS,
          title: "Общие данные",
          field: "gender",
          data: stateRecUserInfoData.gender,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Age"
        component={AgeScreen}
        initialParams={{
          step: 2,
          lastStep: MAX_STEPS,
          title: "Общие данные",
          field: "age",
          data: stateRecUserInfoData.age,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Weight"
        component={WeightScreen}
        initialParams={{
          step: 3,
          lastStep: MAX_STEPS,
          title: "Общие данные",
          field: "weight",
          data: stateRecUserInfoData.weight,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Height"
        component={HeightScreen}
        initialParams={{
          step: 4,
          lastStep: MAX_STEPS,
          title: "Общие данные",
          field: "height",
          data: stateRecUserInfoData.height,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="PhysicalTraining"
        component={PhysicalTrainingScreen}
        initialParams={{
          step: 5,
          lastStep: MAX_STEPS,
          title: "Общие данные",
          field: "physical_training",
          data: stateRecUserInfoData.physical_training,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Meat"
        component={MeatScreen}
        initialParams={{
          step: 6,
          lastStep: MAX_STEPS,
          title: "Питание",
          field: "meat",
          data: stateRecUserInfoData.meat,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Fish"
        component={FishScreen}
        initialParams={{
          step: 7,
          lastStep: MAX_STEPS,
          title: "Питание",
          field: "fish",
          data: stateRecUserInfoData.fish,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Milk"
        component={MilkScreen}
        initialParams={{
          step: 8,
          lastStep: MAX_STEPS,
          title: "Питание",
          field: "milk",
          data: stateRecUserInfoData.milk,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Egg"
        component={EggScreen}
        initialParams={{
          step: 9,
          lastStep: MAX_STEPS,
          title: "Питание",
          field: "egg",
          data: stateRecUserInfoData.egg,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Citrus"
        component={CitrusScreen}
        initialParams={{
          step: 10,
          lastStep: MAX_STEPS,
          title: "Аллергия",
          field: "allergy_citrus",
          data: stateRecUserInfoData.allergy_citrus,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Nut"
        component={NutScreen}
        initialParams={{
          step: 11,
          lastStep: MAX_STEPS,
          title: "Аллергия",
          field: "allergy_nut",
          data: stateRecUserInfoData.allergy_nut,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Honey"
        component={HoneyScreen}
        initialParams={{
          step: 12,
          lastStep: MAX_STEPS,
          title: "Аллергия",
          field: "allergy_honey",
          data: stateRecUserInfoData.allergy_honey,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="MusculoskeletalSystem"
        component={MusculoskeletalSystemScreen}
        initialParams={{
          step: 13,
          lastStep: MAX_STEPS,
          title: "Здоровье",
          field: "musculoskeletal_system",
          data: stateRecUserInfoData.musculoskeletal_system,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Diabetes"
        component={DiabetesScreen}
        initialParams={{
          step: 14,
          lastStep: MAX_STEPS,
          title: "Здоровье",
          field: "diabetes",
          data: stateRecUserInfoData.diabetes,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Health"
        component={HealthScreen}
        initialParams={{
          step: 15,
          lastStep: MAX_STEPS,
          title: "Здоровье",
          field: "health",
          data: stateRecUserInfoData.health,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Varicose"
        component={VaricoseScreen}
        initialParams={{
          step: 16,
          lastStep: MAX_STEPS,
          title: "Здоровье",
          field: "varicose",
          data: stateRecUserInfoData.varicose,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Epilepsy"
        component={EpilepsyScreen}
        initialParams={{
          step: 17,
          lastStep: MAX_STEPS,
          title: "Здоровье",
          field: "epilepsy",
          data: stateRecUserInfoData.epilepsy,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Myopia"
        component={MyopiaScreen}
        initialParams={{
          step: 18,
          lastStep: MAX_STEPS,
          title: "Здоровье",
          field: "myopia",
          data: stateRecUserInfoData.myopia,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Breath"
        component={BreathScreen}
        initialParams={{
          step: 19,
          lastStep: MAX_STEPS,
          title: "Здоровье",
          field: "breath",
          data: stateRecUserInfoData.breath,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Digestion"
        component={DigestionScreen}
        initialParams={{
          step: 20,
          lastStep: MAX_STEPS,
          title: "Здоровье",
          field: "digestion",
          data: stateRecUserInfoData.digestion,
        }}
        options={{ headerShown: false }}
      />
      <OnBoardingFormStack.Screen
        name="Finish"
        component={FinishScreen}
        options={{ headerShown: false }}
      />
    </OnBoardingFormStack.Navigator>
  );
}
