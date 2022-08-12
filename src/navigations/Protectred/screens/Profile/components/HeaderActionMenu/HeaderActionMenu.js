import { ScrollView, VStack } from "native-base";
import HealthKit from "./components/HealthKit";
import ActionButton from "./components/ActionButton";

export default function HeaderActionMenu() {
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
        <ActionButton
          title="Получить рекомендации"
          navigateTo="Recommendation"
          styleType="solid"
        />
        <ActionButton title="" navigateTo="" styleType="border" />
        <ActionButton title="" navigateTo="" styleType="border" />
        <ActionButton title="" navigateTo="" styleType="border" />
        <ActionButton title="" navigateTo="" styleType="border" />
      </VStack>
    </ScrollView>
  );
}
