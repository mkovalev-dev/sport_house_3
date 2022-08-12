import { Box, Heading, HStack, Image, Stack } from "native-base";
import { DEFAULT_COLORS } from "../../../../../../../resources/styles/base/baseStyles";

export default function HealthKit() {
  return (
    <HStack space={0} mt={4}>
      <Box
        borderRadius={20}
        width="50%"
        bg={{
          linearGradient: {
            colors: [DEFAULT_COLORS.PRIMARY, "orange.500"],
            start: [1, 0],
            end: [0, 1],
          },
        }}
        style={{
          width: "50%",
          padding: 15,
        }}
      >
        <HStack space={2}>
          <Image
            source={require("../../../../../../../resources/img/bed.png")}
            style={{ width: 24, height: 24 }}
            alt="distance"
          />
          <Heading size={"sm"} color="#fff">
            Сон
          </Heading>
        </HStack>
        <HStack justifyContent={"center"} alignItems={"center"}>
          <Image
            source={require("../../../../../../../resources/img/line-chart.png")}
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
          bg={{
            linearGradient: {
              colors: [DEFAULT_COLORS.DARK_GRAY, "darkBlue.700"],
              start: [0, 1],
              end: [1, 0],
            },
          }}
          style={{
            width: "100%",
            height: 57.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HStack space={2} justifyContent="center" alignItems="center">
            <Image
              source={require("../../../../../../../resources/img/distance.png")}
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
          bg={{
            linearGradient: {
              colors: [DEFAULT_COLORS.PRIMARY, "orange.500"],
              start: [1, 0],
              end: [0, 1],
            },
          }}
          style={{
            width: "100%",
            height: 57.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HStack space={2} justifyContent="center" alignItems="center">
            <Image
              source={require("../../../../../../../resources/img/steps.png")}
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
  );
}
