import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
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
    if (
      !jobTitle ||
      !jobDescription ||
      !jobLocation ||
      !jobSalary ||
      !jobCompany
    ) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

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

  const handleSalaryChange = (text: string) => {
    if (/^\d*$/.test(text)) {
      setJobSalary(text);
    }
  };

  return (
    <>
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
            maxLength={50}
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
            maxLength={50}
          />
          <TextInput
            style={styles.input}
            placeholder="Job Salary"
            value={jobSalary}
            onChangeText={handleSalaryChange}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Job Company"
            value={jobCompany}
            onChangeText={setJobCompany}
            maxLength={50}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.addButtonModal}
              onPress={handleAddJob}
            >
              <Text style={styles.buttonText}>Add Job</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "tomato",
    borderRadius: 50,
    padding: 20,
    position: "absolute",
    bottom: 30,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButtonModal: {
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "white",
    borderColor: "tomato",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  cancelButtonText: {
    color: "tomato",
  },
  addButtonModalHover: {
    backgroundColor: "darkred",
  },
  cancelButtonHover: {
    backgroundColor: "#f5f5f5",
  },
});
