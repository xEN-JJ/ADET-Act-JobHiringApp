import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";

interface AddJobProps {
  onAddJob: (job: Job) => void;
}

interface Job {
  jobTitle: string;
  jobDescription: string;
  jobLocation: string;
  jobSalary: string;
  jobCompany: string;
}

export default function AddJob({ onAddJob }: AddJobProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobSalary, setJobSalary] = useState("");
  const [jobCompany, setJobCompany] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddJob = () => {
    const newJob = {
      jobTitle,
      jobDescription,
      jobLocation,
      jobSalary,
      jobCompany,
    };
    onAddJob(newJob);
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add New Job</Text>
          <TextInput
            style={styles.input}
            placeholder="Job Title"
            value={jobTitle}
            onChangeText={setJobTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Job Description"
            value={jobDescription}
            onChangeText={setJobDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Job Location"
            value={jobLocation}
            onChangeText={setJobLocation}
          />
          <TextInput
            style={styles.input}
            placeholder="Job Salary"
            value={jobSalary}
            onChangeText={setJobSalary}
          />
          <TextInput
            style={styles.input}
            placeholder="Job Company"
            value={jobCompany}
            onChangeText={setJobCompany}
          />
          <Button title="Add Job" onPress={handleAddJob} />
          <Button title="Cancel" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "tomato",
    borderRadius: 50,
    padding: 20,
    position: "absolute",
    bottom: 30,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
