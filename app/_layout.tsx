import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavBar from "@/components/Navbar";

const Stack = createStackNavigator();

export default function RootLayout() {
  return <BottomNavBar />;
}
