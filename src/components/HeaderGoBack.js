import { HeaderMenu } from "../navigations/Open/screens/signIn/style";
import { Button, ChevronLeftIcon, View } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function HeaderGoBack() {
  const navigation = useNavigation();
  return (
    <View style={HeaderMenu.container}>
      <Button
        variant="ghost"
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ChevronLeftIcon style={{ color: "#fff" }} size="md" />
      </Button>
    </View>
  );
}
