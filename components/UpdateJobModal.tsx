import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from "react-native";

interface Job {
  jobTitle: string;
  jobDescription: string;
  jobLocation: string;
  jobSalary: string;
  jobCompany: string;
}

interface UpdateJobProps {
  job: Job;
  onUpdate: (updatedJob: Job) => void;
  onClose: () => void;
}

export default function UpdateJobModal({
  job,
  onUpdate,
  onClose,
}: UpdateJobProps) {
  const [jobTitle, setJobTitle] = useState(job.jobTitle);
  const [jobDescription, setJobDescription] = useState(job.jobDescription);
  const [jobLocation, setJobLocation] = useState(job.jobLocation);
  const [jobSalary, setJobSalary] = useState(job.jobSalary);
  const [jobCompany, setJobCompany] = useState(job.jobCompany);

  const handleUpdateJob = () => {
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

    const updatedJob: Job = {
      jobTitle,
      jobDescription,
      jobLocation,
      jobSalary,
      jobCompany,
    };

    onUpdate(updatedJob);
    onClose();
  };

  const handleSalaryChange = (text: string) => {
    if (/^\d*$/.test(text)) {
      setJobSalary(text);
    }
  };

  return (
    <Modal visible animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Update Job</Text>
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
            multiline
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
              style={styles.updateButton}
              onPress={handleUpdateJob}
            >
              <Text style={styles.buttonText}>Update Job</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  updateButton: {
    flex: 1,
    backgroundColor: "#ff6347",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginRight: 10,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ff6347",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  cancelButtonText: {
    color: "#ff6347",
    fontWeight: "bold",
  },
});
