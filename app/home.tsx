import React from "react";
import {
  Image,
  View,
  Text,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import JobListing from "@/components/JobListing";
import JobListings from "@/components/JobListings";

export default function HomeScreen() {
  const handlePress = (event: GestureResponderEvent) => {
    console.log("JobCard pressed");
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Welcome to ADET Act Job Hiring App!</Text>
        <Text>Click on the links below to navigate</Text>
      </View>
    </>
    //Show here the open job cards and add an apply button component that will be used (This should be modal)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
