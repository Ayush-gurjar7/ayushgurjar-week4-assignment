import React, { useState } from 'react';
import JobList from '.vscode/components/JobList.js';
import JobFilters from '.vscode/components/JobFilters.js';
import JobForm from '.vscode/components/JobForm.js';
import Pagination from '.vscode/components/Pagination.js';

const jobData = [
  { id: 1, title: 'Frontend Developer', company: 'Company A', location: 'New York', type: 'Full-time' },
  { id: 2, title: 'Backend Developer', company: 'Company B', location: 'San Francisco', type: 'Part-time' },
  { id: 3, title: 'UI/UX Designer', company: 'Company C', location: 'Remote', type: 'Contract' },
  // Add more jobs here
];

function App() {
  const [filteredJobs, setFilteredJobs] = useState(jobData);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 2;

  const handleFilter = (filters) => {
    const { search, location, type } = filters;
    let jobs = jobData;

    if (search) {
      jobs = jobs.filter(job => job.title.toLowerCase().includes(search.toLowerCase()));
    }

    if (location) {
      jobs = jobs.filter(job => job.location === location);
    }

    if (type) {
      jobs = jobs.filter(job => job.type === type);
    }

    setFilteredJobs(jobs);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div>
      <h1>Job Board</h1>
      <JobFilters onFilter={handleFilter} />
      <JobList jobs={currentJobs} />
      <Pagination 
        totalJobs={filteredJobs.length} 
        jobsPerPage={jobsPerPage} 
        paginate={handlePageChange} 
      />
      <JobForm />
    </div>
  );
}

export default App;
