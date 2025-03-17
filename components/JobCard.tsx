import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import UpdateJobModal from "./UpdateJobModal";
import DeleteConfirmation from "./DeleteConfirmation";

interface Job {
  jobTitle: string;
  jobDescription: string;
  jobLocation: string;
  jobSalary: string;
  jobCompany: string;
}

interface JobCardProps {
  job: Job;
  onUpdate: (updatedJob: Job) => void;
  onDelete: (job: Job) => void;
}

export default function JobCard({ job, onUpdate, onDelete }: JobCardProps) {
  const [isDetailsVisible, setDetailsVisible] = useState(false);
  const [isUpdateVisible, setUpdateVisible] = useState(false);
  const [isDeleteVisible, setDeleteVisible] = useState(false);

  console.log("onUpdate function:", onUpdate);

  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={() => setDetailsVisible(true)}
      >
        <View style={styles.header}>
          <Text style={styles.title}>{job.jobTitle}</Text>
          <Text style={styles.subHeader}>{job.jobCompany}</Text>
        </View>
        <View style={styles.body}>
          <Text>{job.jobDescription}</Text>
        </View>
        <View style={styles.footer}>
          <Text>{job.jobLocation}</Text>
          <Text>{job.jobSalary}</Text>
        </View>
      </TouchableOpacity>

      <Modal visible={isDetailsVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{job.jobTitle}</Text>
            <Text style={styles.modalText}>{job.jobDescription}</Text>
            <Text style={styles.modalText}>📍 {job.jobLocation}</Text>
            <Text style={styles.modalText}>💰 {job.jobSalary}</Text>
            <Text style={styles.modalText}>🏢 {job.jobCompany}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.updateButton}
                onPress={() => {
                  setDetailsVisible(false);
                  setUpdateVisible(true);
                }}
              >
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => {
                  setDetailsVisible(false);
                  setDeleteVisible(true);
                }}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setDetailsVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {isUpdateVisible && (
        <UpdateJobModal
          job={job}
          onClose={() => setUpdateVisible(false)}
          onUpdate={onUpdate}
        />
      )}

      {isDeleteVisible && (
        <DeleteConfirmation
          isVisible={isDeleteVisible}
          job={job}
          onClose={() => setDeleteVisible(false)}
          onDelete={onDelete}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 370,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
  },
  header: {
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 14,
    color: "gray",
  },
  body: {
    marginBottom: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  updateButton: {
    backgroundColor: "#ff6347",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: "white",
    borderColor: "#ff6347",
    borderWidth: 2,
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
    marginLeft: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButtonText: {
    color: "#ff6347",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
