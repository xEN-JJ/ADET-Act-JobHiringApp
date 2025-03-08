import {
  Image,
  View,
  Text,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import JobCard from "@/components/JobCard";

export default function HomeScreen() {
  const handlePress = (event: GestureResponderEvent) => {
    console.log("JobCard pressed");
  };

  return (
    <>
      <View style={styles.container}>
        <Text className="text-red-400 text-lg">Home Screen</Text>
        <JobCard onPress={handlePress} />
      </View>
    </>
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
