import React, { useState } from 'react';

function JobFilters({ onFilter }) {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ search, location, type });
  };

  return (
    <div>
      <h2>Filters</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search by title" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Select Location</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Remote">Remote</option>
        </select>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
}

export default JobFilters;
