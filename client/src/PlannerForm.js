import React, { useState } from 'react';
import axios from 'axios';

function PlannerForm() {
  const [tasks, setTasks] = useState('');
  const [availability, setAvailability] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/plan', { tasks, availability });
    localStorage.setItem('plan', JSON.stringify(res.data));
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Enter your tasks separated by commas"
        value={tasks}
        onChange={(e) => setTasks(e.target.value)}
      />
      <input
        placeholder="Your availability (e.g., 9am-5pm)"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
      />
      <button type="submit">Generate Plan</button>
    </form>
  );
}
export default PlannerForm;