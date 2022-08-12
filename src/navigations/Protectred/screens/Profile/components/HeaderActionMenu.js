import {
  Box,
  Heading,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import { DEFAULT_COLORS } from "../../../../../resources/styles/base/baseStyles";
import { useNavigation } from "@react-navigation/native";

export default function HeaderActionMenu() {
  const navigation = useNavigation();
  return (
    <ScrollView
      h="80"
      _contentContainerStyle={{
        px: "20px",
        mb: "4",
        paddingBottom: 100,
      }}
    >
      <VStack space={3}>
        <HStack space={0} mt={4}>
          <Box
            borderRadius={20}
            width="50%"
            style={{
              width: "50%",
              backgroundColor: DEFAULT_COLORS.PRIMARY,
              padding: 15,
            }}
          >
            <HStack space={2}>
              <Image
                source={require("../../../../../resources/img/bed.png")}
                style={{ width: 24, height: 24 }}
                alt="distance"
              />
              <Heading size={"sm"} color="#fff">
                Sleep
              </Heading>
            </HStack>
            <HStack justifyContent={"center"} alignItems={"center"}>
              <Image
                source={require("../../../../../resources/img/line-chart.png")}
                style={{ width: 54, height: 54 }}
                alt="distance"
              />
            </HStack>
            <HStack space={1} alignItems={"center"}>
              <Heading size={"sm"} color="#fff">
                6:45
              </Heading>
              <Heading size={"xs"} style={{ color: "#e5e5e5" }}>
                h
              </Heading>
            </HStack>
          </Box>
          <Stack space={3} width="45%" marginLeft="5%">
            <Box
              borderRadius={20}
              style={{
                width: "100%",
                backgroundColor: DEFAULT_COLORS.DARK_GRAY,
                height: 57.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HStack space={2} justifyContent="center" alignItems="center">
                <Image
                  source={require("../../../../../resources/img/distance.png")}
                  style={{ width: 24, height: 24 }}
                  alt="distance"
                />
                <Heading size={"md"} color="#fff">
                  1,6
                </Heading>
                <Heading size={"xs"} style={{ color: "#afafaf" }}>
                  km
                </Heading>
              </HStack>
            </Box>
            <Box
              borderRadius={20}
              style={{
                width: "100%",
                backgroundColor: DEFAULT_COLORS.PRIMARY,
                height: 57.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HStack space={2} justifyContent="center" alignItems="center">
                <Image
                  source={require("../../../../../resources/img/steps.png")}
                  style={{ width: 24, height: 24 }}
                  alt="distance"
                />
                <Heading size={"md"} color="#fff">
                  3,687
                </Heading>
              </HStack>
            </Box>
          </Stack>
        </HStack>
        <Pressable
          onPress={() => {
            navigation.navigate("Recommendation");
          }}
        >
          <Box
            borderRadius={20}
            style={{
              width: "100%",
              backgroundColor: DEFAULT_COLORS.DARK_GRAY,
              height: 57.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ width: 300, color: "white", textAlign: "center" }}>
              Получить рекомендации
            </Text>
          </Box>
        </Pressable>
        <Box
          borderRadius={20}
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: DEFAULT_COLORS.DARK_GRAY,
            height: 57.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              width: 300,
              color: DEFAULT_COLORS.DARK_GRAY,
              textAlign: "center",
            }}
          >
            Мои команды
          </Text>
        </Box>
        <Box
          borderRadius={20}
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: DEFAULT_COLORS.DARK_GRAY,
            height: 57.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              width: 300,
              color: DEFAULT_COLORS.DARK_GRAY,
              textAlign: "center",
            }}
          >
            Мои спортивные площадки
          </Text>
        </Box>
      </VStack>
    </ScrollView>
  );
}
