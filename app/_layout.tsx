import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";

import "../global.css";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="not-found" />
      </Stack>
    </>
  );
}
