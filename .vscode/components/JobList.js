import React from 'react';

function JobList({ jobs }) {
  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location} ({job.type})</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
