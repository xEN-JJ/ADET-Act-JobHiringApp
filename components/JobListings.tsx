import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import JobCard from "./JobCard";

interface Job {
  jobTitle: string;
  jobDescription: string;
  jobLocation: string;
  jobSalary: string;
  jobCompany: string;
}

interface JobListingsProps {
  jobs: Job[];
  onUpdate: (job: Job) => void;
  onDelete: (job: Job) => void;
}

export default function JobListings({
  jobs,
  onUpdate,
  onDelete,
}: JobListingsProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <JobCard job={item} onUpdate={onUpdate} onDelete={onDelete} />
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  listContent: {
    alignItems: "center",
  },
  cardContainer: {
    width: "100%",
    marginBottom: 10,
  },
});
