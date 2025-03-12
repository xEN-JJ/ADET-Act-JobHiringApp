import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchJob from '@/components/SearchJob';
import JobListings from '@/components/JobListings';
import AddJob from '@/components/AddJob';

interface Job {
  jobTitle: string;
  jobDescription: string;
  jobLocation: string;
  jobSalary: string;
  jobCompany: string;
}

export default function JobsScreen() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  const handleAddJob = (job: Job) => {
    const updatedJobs = [...jobs, job];
    setJobs(updatedJobs);
    setFilteredJobs(updatedJobs);
  };

  const handleSearch = (query: string) => {
    const filtered = jobs.filter(job =>
      job.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
      job.jobDescription.toLowerCase().includes(query.toLowerCase()) ||
      job.jobLocation.toLowerCase().includes(query.toLowerCase()) ||
      job.jobCompany.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <View style={styles.container}>
      <SearchJob onSearch={handleSearch} />
      <JobListings jobs={filteredJobs} />
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