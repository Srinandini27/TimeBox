import React from 'react';

function ScheduleView() {
  const plan = JSON.parse(localStorage.getItem('plan')) || [];

  return (
    <div>
      <h3>Today's Schedule</h3>
      <ul>
        {plan.map((slot, index) => (
          <li key={index}>
            <strong>{slot.time}</strong>: {slot.task}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ScheduleView;