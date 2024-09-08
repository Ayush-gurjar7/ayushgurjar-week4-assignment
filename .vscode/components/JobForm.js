import React, { useState } from 'react';

function JobForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Thank you, ${name}. Your application has been submitted.`);
    setName('');
    setEmail('');
    setResume(null);
  };

  return (
    <div>
      <h2>Apply for a Job</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="file" 
          onChange={(e) => setResume(e.target.files[0])} 
        />
        <button type="submit">Submit Application</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default JobForm;
