import { Button, Divider, Heading, HStack, View } from "native-base";
import { DEFAULT_COLORS } from "../../../../../resources/styles/base/baseStyles";
import { Spacer } from "native-base/src/components/primitives/Flex";
import { useNavigation } from "@react-navigation/native";

export default function HeaderWithoutRecommendation() {
  const navigation = useNavigation();
  return (
    <View>
      <HStack alignItems="center">
        <Heading fontSize={16} style={{ color: DEFAULT_COLORS.DARK_GRAY }}>
          Мои рекомендации
        </Heading>
        <Spacer />
      </HStack>
      <Button
        size={"md"}
        variant="outline"
        marginTop={4}
        marginBottom={4}
        rounded="xl"
        height="50"
        style={{ borderColor: DEFAULT_COLORS.PRIMARY }}
        _text={{
          color: DEFAULT_COLORS.PRIMARY,
        }}
        onPress={() => {
          navigation.navigate("Recommendation");
        }}
      >
        Получить рекомендацию
      </Button>
      <Divider />
    </View>
  );
}
