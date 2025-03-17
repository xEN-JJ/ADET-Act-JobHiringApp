import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchJob from "@/components/SearchJob";
import JobListings from "@/components/JobListings";
import AddJob from "@/components/AddJob";

interface Job {
  jobTitle: string;
  jobDescription: string;
  jobLocation: string;
  jobSalary: string;
  jobCompany: string;
}

interface JobScreenProps {
  onUpdate: (job: Job) => void;
  onDelete: (job: Job) => void;
}

export default function JobsScreen({ onUpdate, onDelete }: JobScreenProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  const handleAddJob = (job: Job) => {
    const updatedJobs = [...jobs, job];
    setJobs(updatedJobs);
    setFilteredJobs(updatedJobs);
  };

  const handleSearch = (query: string) => {
    const filtered = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
        job.jobDescription.toLowerCase().includes(query.toLowerCase()) ||
        job.jobLocation.toLowerCase().includes(query.toLowerCase()) ||
        job.jobCompany.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleUpdateJob = (updatedJob: Job) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.jobTitle === updatedJob.jobTitle ? updatedJob : job
      )
    );
    setFilteredJobs((prevFilteredJobs) =>
      prevFilteredJobs.map((job) =>
        job.jobTitle === updatedJob.jobTitle ? updatedJob : job
      )
    );
  };

  const handleDeleteJob = (jobToDelete: Job) => {
    const updatedJobs = jobs.filter(
      (job) => job.jobTitle !== jobToDelete.jobTitle
    );
    setJobs(updatedJobs);
    setFilteredJobs(updatedJobs);
  };

  return (
    <View style={styles.container}>
      <SearchJob onSearch={handleSearch} />
      <JobListings
        jobs={filteredJobs}
        onUpdate={handleUpdateJob}
        onDelete={handleDeleteJob}
      />
      <AddJob onAddJob={handleAddJob} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
