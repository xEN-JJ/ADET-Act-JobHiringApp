import { View, Text, StyleSheet } from "react-native";

export default function Jobs() {
  return (
    <View className="align-middle p-10">
      <Text style={styles.text}>Job Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
});
