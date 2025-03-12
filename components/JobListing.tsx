import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  GestureResponderEvent,
  Button,
} from "react-native";

interface Job {
  jobTitle: string;
  jobDescription: string;
  jobLocation: string;
  jobSalary: string;
  jobCompany: string;
}

interface JobCardProps {
  job: Job;
  onPress: (event: GestureResponderEvent) => void;
}

export default function JobListing({ job, onPress }: JobCardProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={toggleModal}>
        <Text style={styles.title}>{job.jobTitle}</Text>
        <Text>{job.jobCompany}</Text>
        <Text>{job.jobLocation}</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="fade">
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{job.jobTitle}</Text>
          <Text>{job.jobDescription}</Text>
          <Text>{job.jobLocation}</Text>
          <Text>{job.jobSalary}</Text>
          <Text>{job.jobCompany}</Text>
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
