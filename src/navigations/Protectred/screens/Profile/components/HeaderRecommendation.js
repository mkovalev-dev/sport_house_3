import { TabProfileScreen } from "../style";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Pressable,
  Text,
  View,
  VStack,
} from "native-base";
import {
  DEFAULT_COLORS,
  DEFAULT_STYLE_PARAMS,
} from "../../../../../resources/styles/base/baseStyles";
import { Spacer } from "native-base/src/components/primitives/Flex";

export default function HeaderRecommendation() {
  return (
    <View>
      <HStack alignItems="center">
        <Heading fontSize={16} style={{ color: DEFAULT_COLORS.DARK_GRAY }}>
          Мои рекомендации
        </Heading>
        <Spacer />
        <Button
          variant="link"
          onPress={() => {
            console.log("preess");
          }}
        >
          <Text
            fontSize={11}
            style={{
              textDecorationLine: "underline",
              color: DEFAULT_COLORS.DARK_GRAY,
            }}
          >
            Просмотреть все
          </Text>
        </Button>
      </HStack>
      <Pressable onPress={() => console.log("I'm Pressed")}>
        <Box
          height="150"
          rounded="xl"
          bg="coolGray.100"
          style={{
            marginTop: 10,
            justifyContent: "center",
            padding: DEFAULT_STYLE_PARAMS.padding - 20,
          }}
        >
          <HStack space={3} justifyContent={"center"} alignItems={"center"}>
            <Image
              source={require("../../../../../resources/img/img_1.png")}
              size="sm"
              alt="animated-icon-recomendation"
              rounded="xl"
            />
            <Divider orientation="vertical" mx="3" />
            <VStack space={2}>
              <HStack space={2}>
                <Text bold color={DEFAULT_COLORS.DARK_GRAY}>
                  Каллории:
                </Text>
                <Text>1234</Text>
              </HStack>
              <HStack space={2}>
                <Text bold color={DEFAULT_COLORS.DARK_GRAY}>
                  Вид спорта:
                </Text>
                <Text>Футбол</Text>
              </HStack>
              <Button
                size={"sm"}
                variant="outline"
                style={{ borderColor: DEFAULT_COLORS.PRIMARY }}
                _text={{
                  color: DEFAULT_COLORS.PRIMARY,
                }}
              >
                Подробнее...
              </Button>
            </VStack>
          </HStack>
        </Box>
      </Pressable>
    </View>
  );
}
