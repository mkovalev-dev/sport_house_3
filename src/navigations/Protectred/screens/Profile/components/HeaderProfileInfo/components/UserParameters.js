import { ScrollView, StyleSheet } from "react-native";
import { Box, Heading, Text, View } from "native-base";
import { useSelector } from "react-redux";
import { ViewUserRecInfoData } from "../../../../../../../api/redux/slices/userSlice";

export default function UserParameters() {
  const stateRecUserInfoData = useSelector(ViewUserRecInfoData);
  return (
    <View>
      <ScrollView horizontal={true}>
        <Box
          style={styles.container}
          borderStyle={stateRecUserInfoData?.height ? "solid" : "dashed"}
        >
          <Heading style={styles.hedingStyle}>
            {stateRecUserInfoData?.height ? stateRecUserInfoData.height : "-"}{" "}
            см
          </Heading>
          <Text style={styles.titleStyle}>Текущий рост</Text>
        </Box>
        <Box
          style={styles.container}
          borderStyle={stateRecUserInfoData?.weight ? "solid" : "dashed"}
        >
          <Heading style={styles.hedingStyle}>
            {stateRecUserInfoData?.weight ? stateRecUserInfoData.weight : "-"}{" "}
            кг
          </Heading>
          <Text style={styles.titleStyle}>Текущий вес</Text>
        </Box>
        <Box style={styles.container} borderStyle="dashed">
          <Heading style={styles.hedingStyle}>-</Heading>
          <Text style={styles.titleStyle}>Текущий ...</Text>
        </Box>
        <Box style={styles.container} borderStyle="dashed">
          <Heading style={styles.hedingStyle}>-</Heading>
          <Text style={styles.titleStyle}>Текущий ...</Text>
        </Box>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: 135,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#fff",
    marginLeft: 5,
    marginRight: 5,
  },
  hedingStyle: {
    color: "#fff",
    fontSize: 18,
  },
  titleStyle: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
  },
});
