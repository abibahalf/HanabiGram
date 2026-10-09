import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    Cookies: require("../assets/fonts/Cookie-Regular.ttf"),
  });

  if (!fontsLoaded) return <View></View>;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      {/* <Stack.Screen name="(auth)" /> */}
    </Stack>
  );
}
